class Field {
errors: string[];
input: HTMLInputElement;

constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
    this.errors = [];
    this.validate();
    errorMessage.innerText = this.errors[0] || '';
    });
}

validate() {}
}

function RequiredFieldDecorator(field: Field): Field{
    lelt validate = field.validate;
    field.validate = function (){
        validate()
        let value = field.input.value;
        if(!value){
            field.error.push("requerido")
        }
    };eturn field;

}

function RequiredFieldDecorator(field: Field): Field{
    lelt validate = field.validate;
    field.validate = function (){
        validate()
        let value = field.input.value;
        if(value.indexOf("@")== -1){
            field.error.push("debe ser un email")
        }
    };eturn field;

}


let field = new Field( )
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);