import { Link, useNavigate } from 'react-router-dom'

import '../../../App.css'

import Header from '../../header'
import Title from '../../title'
import { Register_styled } from './style'

import { db, auth } from '../../db'

import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SaveIcon from '@material-ui/icons/Save';
import { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register(){

const [email, setEmail]=useState('')
const [senha, setSenha]=useState('')

const navigate=useNavigate()

useEffect(()=>{
    
},[email, senha])


async function requisiçãoAjax(){

    await createUserWithEmailAndPassword(auth,email,senha)
            .then((response)=>{
                console.log(response)

                let id=auth.currentUser.uid
                localStorage.setItem('idadmin', id)
                navigate(`/insercao/${id}/registro-de-mutantes`,{replace:true})
            })
            .catch(err=>{
                alert('Erro ao cadastrar o usuário.')
            })

}

 function cadastrar(e){
    e.preventDefault()
    requisiçãoAjax()
}

    return(
        <div>
            
            <Header/>

            <Register_styled>
                <form className="container" onSubmit={cadastrar}>
                        <Title title="Cadastro"/>

                        <Grid className="grid" container>    

                            <Grid item xs={12}>
                                <TextField id="standard-basic" 
                                           label="novo email"
                                           type={"email"}
                                           className="size"
                                           value={email}
                                           onChange={(e)=>{setEmail(e.target.value)}} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField id="standard-basic" 
                                           label="nova senha"
                                           type={"password"}
                                           className="size"
                                           value={senha}
                                           onChange={(e)=>{setSenha(e.target.value)}} />
                            </Grid>

                            <Grid item xs={12}>
                                <Button className="btn"
                                        variant="contained" 
                                        type="submit"
                                        endIcon={<SaveIcon />}
                                    >cadastrar</Button>
                            </Grid>

                        </Grid>

                       <Link to={'/login'} className="cadastre-se">
                            já possui conta? faça login
                       </Link>
                </form>
            </Register_styled>
        
        </div>
    )
}