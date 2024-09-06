(() => {

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(
      public id: string,
      public type: HtmlType,
    ) { }
  }
  class InputAttributes {
    public value: string;
    public placeholder: string;
    constructor(
      value: string,
      placeholder: string,
    ) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }


  class InputEvents {
    constructor() {}

    setFocus() { }
    getValue() { };
    isActive() { };
    removeValue() { };
  }


  interface InputElementProps {
    value: string;
    placeholder: string;
    id: string;
  }

  class InputElement {
    private htmlElement: HtmlElement;
    private inputAttributes: InputAttributes;
    private inputEvents: InputEvents;

    constructor({ value, placeholder, id }: InputElementProps) {
      this.htmlElement = new HtmlElement(id, 'input');
      this.inputAttributes = new InputAttributes(value, placeholder);
      this.inputEvents = new InputEvents();
    }
  }
  

  const jonElement = new InputElement({value:'Fernando', placeholder:'Enter first name', id:'txtName'});

  console.log({ jonElement });

})()