// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("my name is")) {
            const name = message.split("is")[1].trim();
            this.actionProvider.handleNameInput({ ...this.state, name });
          } else if (lowerCaseMessage.includes("my email is")) {
            const email = message.split("is")[1].trim();
            this.actionProvider.handleEmailInput({ ...this.state, email });
          } else if(lowerCaseMessage.includes("my password is")){
            const password = message.split("is")[1].trim()
            this.actionProvider.handlePasswordInput({ ...this.state, password });
          }
    }
  }

  
  export default MessageParser;