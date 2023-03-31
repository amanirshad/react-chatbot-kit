// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleNameInput = (name) => {
    // if (name.trim() === '') {
    //   const message = this.createChatBotMessage("I'm sorry, it looks like you didn't provide a valid name. Please try again.");
    //   this.updateChatbotState(message);
    //   return;
    // }

    const message = this.createChatBotMessage(
      `Great! Nice to meet you ${name}. Now, could you please provide me with your email?`
    );
    this.updateChatbotState(message);
    this.updateChatbotState({ user: name }, "name");
  };

  handleEmailInput = (email) => {
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   const message = this.createChatBotMessage("I'm sorry, it looks like you didn't provide a valid email. Please try again.");
    //   this.updateChatbotState(message);
    //   return;
    // }

    const message = this.createChatBotMessage(
      `Awesome! Your email is ${email}. Now, could you please provide me with your password?`
    );
    this.updateChatbotState(message);
    this.updateChatbotState({ email }, "email");
  };

  handlePasswordInput = (password) => {
    const message = this.createChatBotMessage(
      `Great! Your registration is complete. Your name is ${this.state.name}, your email is ${this.state.email}, and your password is ${password}.`
    );
    this.updateChatbotState(message);
    this.updateChatbotState({ password }, "password");
  };

  handleInvalidInput = () => {
    const message = this.createChatBotMessage(
      "I'm sorry, I didn't understand that. Could you please try again?"
    );
    this.updateChatbotState(message);
  };

  handleUserInput = (input) => {
    const lowerCaseInput = input.toLowerCase();

    switch (lowerCaseInput) {
      case "my name is":
        const name = input.split("my name is")[1].trim();
        this.handleNameInput(name);
        break;
      case "my email is":
        const email = input.split("my email is")[1].trim();
        this.handleEmailInput(email);
        break;
      case "my password is":
        const password = input.split("my password is")[1].trim();
        this.handlePasswordInput(password);
        break;
      default:
        this.handleInvalidInput();
        break;
    }
  };

  updateChatbotState = (message, step = null) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
      state: {
        ...prevState.state,
        ...(step && { step }),
        ...(message.user && { [step]: message.user }),
      },
    }));
  };
}

export default ActionProvider;
