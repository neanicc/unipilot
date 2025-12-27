import React from 'react';

interface MarkdownRendererProps {
  content: string;
  textColorClass?: string;
}

// A lightweight custom markdown renderer
// Handles: **bold**, *italic*, - lists, ### headers, [links]
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, textColorClass = 'text-white' }) => {
  
  const processLine = (line: string, index: number) => {
    // Headers
    if (line.startsWith('### ')) {
      return <h3 key={index} className="font-bold text-lg mt-2 mb-1 text-white">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('## ')) {
      return <h2 key={index} className="font-bold text-xl mt-3 mb-2 text-white">{line.replace('## ', '')}</h2>;
    }

    // Lists
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const listContent = line.trim().substring(2);
      return (
        <li key={index} className="ml-4 list-disc mb-1 text-white">
          <span dangerouslySetInnerHTML={{ __html: formatInline(listContent) }} />
        </li>
      );
    }
    
    // Empty lines
    if (line.trim() === '') {
      return <div key={index} className="h-2"></div>;
    }

    // Paragraphs
    return (
      <p key={index} className={`mb-1 ${textColorClass}`}>
        <span dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      </p>
    );
  };

  const formatInline = (text: string) => {
    // Bold: **text**
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
    // Italic: *text*
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Links: [text](url) - simplistic regex
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-blue-400 underline hover:text-blue-300">$1</a>');
    return formatted;
  };

  const lines = content.split('\n');

  return (
    <div className="markdown-body text-sm leading-relaxed text-white">
      {lines.map((line, idx) => processLine(line, idx))}
    </div>
  );
};

export default MarkdownRenderer;