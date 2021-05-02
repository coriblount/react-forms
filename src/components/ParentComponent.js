import React from 'react'
import Form from './form'

class ParentComponent extends React.Component{
    state = {
        firstName: "",
        lastName: "",
    }

    handleFirstNameChange = () => {
        this.setState = ({
        firstName = event.target.value
        })
    }

    handleLastNameChange = () => {
        this.setState = ({
            lastName = event.target.value
        })
    }

    render = () => {
        return(
           <Form
           formData={this.state}
           handleFirstNameChange={this.handleFirstNameChange}
           handleLastNameChange={this.handleLastNameChange}/>

        
        )
    }


}

export default ParentComponent