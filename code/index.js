var icon = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8ZWxsaXBzZSBzdHJva2Utd2lkdGg9IjAiIHRyYW5zZm9ybT0icm90YXRlKDE3LjY1MDEsIDQwMCwgMzAwKSIgcnk9IjE5NiIgcng9IjE5NiIgaWQ9InN2Z18yIiBjeT0iMzAwIiBjeD0iNDAwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiM4MzExZTAiLz4KIDwvZz4KCjwvc3ZnPg==";

class silvxrtools {
  constructor(runtime, extensionId) {
	this.runtime = runtime;
  }
  getInfo () {
    return {
      id: 'silvxrtools',
      name: 'silvxrtools',
      menuIconURI: icon,
      blocks: [
      {
        opcode: 'myReporter',
        blockType: Scratch.BlockType.REPORTER,
        text: 'letter [LETTER_NUM] of [TEXT]',
        arguments: {
          LETTER_NUM: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: '1'
          },
          TEXT: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'text'
          }
        }
      }
      ]
    };
  }
  myReporter(args) {
    // Implement the function here
    return String(args.TEXT).charAt(Number(args.LETTER_NUM)-1) // Assuming that you need a 1-length of string here, not a 0-length of string minus one
  };
}
Scratch.extensions.register(new silvxrtools());
