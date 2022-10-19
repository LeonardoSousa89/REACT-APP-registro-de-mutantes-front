import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import '../../../App.css'

import { auth, db } from '../../db'

import Header from '../../header'
import Title from '../../title'
import { Login_styled } from './style';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login(){
    
    const  [email, setEmail]=useState('')
    const  [senha, setSenha]=useState('')

    const navigate=useNavigate()

    useEffect(()=>{

    },[email, senha])

    

    async function login(e){
        e.preventDefault()

        let id=auth.currentUser.uid
        localStorage.setItem('idadmin', id)

        await signInWithEmailAndPassword(auth,email,senha)
                .then(()=>{
                navigate(`/insercao/${id}/registro-de-mutantes`,{replace:true})
                }).catch(()=>{
                    alert('Erro ao logar, verifique o usuário e a senha.')
                })
    }


    return(
        <div>
            <Header/>

            <Login_styled>
            <form className="container" onSubmit={login}>
                        <Title title="Login"/>

                        <Grid className="grid" container>    

                            <Grid item xs={12}>
                                <TextField id="standard-basic" 
                                           label="email"
                                           type={"email"}
                                           className="size"
                                           value={email}
                                           onChange={(e)=>{setEmail(e.target.value)}} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField id="standard-basic" 
                                           label="senha"
                                           type={"password"}
                                           className="size"
                                           value={senha}
                                           onChange={(e)=>{setSenha(e.target.value)}} />
                            </Grid>

                            <Grid item xs={12}>
                                <Button className="btn"
                                        variant="contained" 
                                        type="submit"
                                    >login</Button>
                            </Grid>

                        </Grid>

                       <Link to={'/cadastro'} className="cadastre-se">
                            não possui conta? crie aqui
                       </Link>
                </form>

            </Login_styled>

            
        </div>
    )
}