import React,{Component} from "react";

import api from "../../services/api";

import { Link,useNavigate} from "react-router-dom";

import {Container, Form} from './styles'
 import {login} from '../../services/auth'


import logo from '../../assets/airbnb-logo.svg'

class SignIn extends Component{
    state = {
        email:'',
        password:'',
        error:''
    }


    handleSignIn = async (e)=>{
        e.preventDefault()
        const {email,password } = this.state

        if(!email || !password){
            this.setState({error:"Preencha e-mail e senha para continuar!"})
        }
        else{
            try{
                const {data}  = await api.post('/sessions',{email,password})
                
                login(data.token)
                this.props.history('/app')
            }
            catch(err){
                console.log(err);
                this.setState({error:"Houve um problema com o login, verifique suas credenciais. T.T"})
            }
        }

    }


    render(){
        return(
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={logo} alt="Logo AirBnb"/>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={(e)=>this.setState({email:e.target.value})}
                    />

                    <input 
                        type="password" 
                        placeholder="Senha"
                        onChange={(e)=>this.setState({password: e.target.value})}
                    />

                <button type="submit">Entrar</button>
                <hr/>
                <Link to='/signup'>Criar conta grátis</Link>
                </Form>
            </Container>
        )
    }

}



export default  (props) =>{
    return <SignIn history={useNavigate()} />


}
