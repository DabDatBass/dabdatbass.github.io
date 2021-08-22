class silvxrtools {
  constructor(runtime, extensionId) {
		this.runtime = runtime;
	}
	static get STATE_KEY() {
		return 'Scratch.websockets';
	}
  getInfo () {
    return {
      id: 'someBlocks',
      name: 'Some Blocks',
      blocks: [{
        opcode: 'myReporter',
        blockType: BlockType.REPORTER,
        text: 'letter [LETTER_NUM] of [TEXT]',
        arguments: {
          LETTER_NUM: {
            type: ArgumentType.STRING,
            defaultValue: '1'
          },
          TEXT: {
            type: ArgumentType.STRING,
            defaultValue: 'text'
          }
        }
      }]
    };
  }
}
Scratch.extensions.register(new silvxrtools());
