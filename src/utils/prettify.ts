export function prettify(query: string): string {
  query = query
    .replace(/\s+/g, ' ')
    .replace(/(\s+)?\{(\s+)?/g, ' {\n')
    .replace(/(\s+)?\}(\s+)?/g, '}\n')
    .replace(/(\w+)/g, '$1\n')
    .replace(/(\w+)\s+\{/g, '$1 {\n')
    .replace(/\([^)]*\)/g, (x: string) => {
      return x
        .replace(/\s+/g, '')
        .replace(/([,:])/g, '$1 ')
        .replace(/[=]/g, ' = ');
    })
    .replace(/(\w+)(\s+)?(\([^)]*\))/g, '$1$3')
    .replace(/\s+@/g, ' @')
    .replace(/(query|mutation)\s+(.+\(\$)/g, '$1 $2')
    .replace(/(fragment([\s\S]*?))\{/g, (x: string) => x.replace(/\s+/g, ' '))
    .replace(/(\w+)\s*:(\s*)?(.*?)(?=\{)/g, '$1: $3')
    .replace(/(?<=\}\n)(query|mutation|fragment)/g, '\n$1');

  const lines: string[] = query.split('\n');
  let indentLevel = 0;
  const formattedLines: string[] = [];

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine) {
      if (trimmedLine.endsWith('{')) {
        formattedLines.push('  '.repeat(indentLevel) + trimmedLine);
        indentLevel += 1;
      } else if (trimmedLine === '}') {
        indentLevel -= 1;
        formattedLines.push('  '.repeat(indentLevel) + trimmedLine);
      } else {
        formattedLines.push('  '.repeat(indentLevel) + trimmedLine);
      }
    }
  });

  const formattedQuery = formattedLines.join('\n');
  return formattedQuery;
}
