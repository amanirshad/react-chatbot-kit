import Counter from './Counter'
// MessageParser starter code
class MessageParser {
      constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    

   static counter = -1;

    increment = () => {
      MessageParser.counter++;
      //this.forceUpdate();
    };
    
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        console.log(MessageParser.counter);
        this.increment();
        console.log(MessageParser.counter);

        if (lowerCaseMessage.includes("my name is")|| MessageParser.counter%3==0) {
            //const name = message.split("is")[1].trim();
            const name = lowerCaseMessage;
            this.actionProvider.handleNameInput({ ...this.state, name });
          } else if (lowerCaseMessage.includes("my email is") || MessageParser.counter%3==1) {
            const email = lowerCaseMessage;
            //const email = message.split("is")[1].trim();
            this.actionProvider.handleEmailInput({ ...this.state, email });
          } else if(lowerCaseMessage.includes("my password is") || MessageParser.counter%3==2){
            const password = lowerCaseMessage
            //const password = message.split("is")[1].trim()
            this.actionProvider.handlePasswordInput({ ...this.state, password });
          }else{
            this.actionProvider.handleInvalidInput({...this.state})
          }
    }
  }

  
  export default MessageParser;