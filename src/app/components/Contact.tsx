// components/Contact.tsx
import React, { Component } from 'react';

interface ContactProps {
 
}

class Contact extends Component<ContactProps> {
    constructor(props: ContactProps) {
        super(props);
    }

    render() {
        const thisComponent: any = this;
        const props: any = thisComponent.props;

        return (
            <div>
                <h2>Contact {props.match.params.country}</h2>
            </div>
        );
    }
}

export default Contact;