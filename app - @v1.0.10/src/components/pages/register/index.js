import { Link, useNavigate } from 'react-router-dom'

import '../../../App.css'

import Header from '../../header'
import Title from '../../title'
import { Register_styled } from './style'

import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SaveIcon from '@material-ui/icons/Save';
import { useEffect, useState } from 'react'

export default function Register(){

const [nome, setNome]=useState('')
const [email, setEmail]=useState('')
const [senha, setSenha]=useState('')

const navigate=useNavigate()

useEffect(()=>{
    
},[nome, email, senha])


async function requisiçãoAjax(){
    let data={nome, email, senha}
    
    let cadastro_admin_post='http://localhost:8765/admin-mutantes-app/registro/cadastro'

    await fetch(cadastro_admin_post,
        { method:'POST',
          body:JSON.stringify(data),
          headers:{'Content-Type':'application/json'}
        })
        .then(response=>response.json())
        .then(response=>{
            localStorage.setItem('idadmin', response.idadmin)
            navigate(`/insercao/${response.idadmin}/registro-de-mutantes`, {replace: true})
        })
        .catch(e=>{
            alert(e)
            console.log(e)
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
                                           label="nome"
                                           type="text"
                                           className="size"
                                           value={nome}
                                           onChange={(e)=>{setNome(e.target.value)}} />
                            </Grid>

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