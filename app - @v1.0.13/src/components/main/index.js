import '../../App.css'
import { Main_styled } from './style';

import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SaveIcon from '@material-ui/icons/Save';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {

     
const [pais, setPais]=useState('')
const [uf, setUf]=useState('')
const [cidade, setCidade]=useState('')
const [nome, setNome]=useState('')
const [habilidade, setHabilidade]=useState('')
     
  const navigate=useNavigate()
  let idadmin=localStorage.getItem('idadmin')

  useEffect(()=>{

     function autenticado(){
        
          if(!idadmin){
            navigate('/login',{ replace:true })
          }
        }
  
        autenticado()

  },[])


  async function requisicaoAjax(){

     let idadmin=localStorage.getItem('idadmin')

     let id_admin={"idadmin": idadmin}

     let data={pais, uf, cidade, nome, habilidade, id_admin}

     let URL_post=`http://localhost:8765/admin-mutantes-app/registro/${idadmin}/registro-de-mutantes`
     
     await fetch( URL_post,{method:'POST',
                      body:JSON.stringify(data),
                      headers:{'Content-Type':'application/json' }
     })
     .then(response=>{
          if(response.ok){
               console.log(response.json())
               navigate(`/lista-de-mutantes/${idadmin}`, {replace: true})
          }
          else{
               alert("Houve um erro ao contatar o servidor.")
          }
     })
     .catch(err=>console.error(err))

  } 

  function enviar(e){
     e.preventDefault()
     requisicaoAjax()
}

function sair(){
     localStorage.removeItem('idadmin')
     navigate('/login' ,{replace: true})
}

  return (
       <div className='_MAIN'>

            <Main_styled>
             
            <div  className="sair">
               <Button   
                    variant="contained" 
                    color="secondary" 
                    size="large"
                    onClick={sair}
                    >
                    sair
               </Button>
          </div>


             <form onSubmit={enviar}>
               <Grid container>
                         <Grid item xs={2}>
                              <TextField id="standard-basic" 
                                        label="país"
                                        className='middle'
                                        value={pais}
                                        onChange={(e)=>{setPais(e.target.value)}}/>
                         </Grid>

                         <Grid item xs={2}>
                              <TextField id="standard-basic" 
                                        label="unidade federal"
                                        className='middle'
                                        value={uf}
                                        onChange={(e)=>{setUf(e.target.value)}}/>
                         </Grid>

                         <Grid item xs={12}>
                              <TextField id="standard-basic" 
                                        label="cidade"
                                        className='size'
                                        value={cidade}
                                        onChange={(e)=>{setCidade(e.target.value)}}
                                        />
                         </Grid>

                         <Grid item xs={12}>
                              <TextField id="standard-basic" 
                                        label="nome"
                                        className='size'
                                        value={nome}
                                        onChange={(e)=>{setNome(e.target.value)}}/>
                         </Grid>

                         <Grid item xs={12}>
                              <TextField id="standard-basic" 
                                        label="habilidade"
                                        className='size'
                                        value={habilidade}
                                        onChange={(e)=>{setHabilidade(e.target.value)}}/>
                              </Grid>
                         </Grid>
                    
                         <Grid container>
                              <Grid item xs={12}>
                                   <Button   type="submit"
                                             variant="contained" 
                                             color="link" 
                                             size="large"
                                             id="button"
                                             endIcon={<SaveIcon />}
                                             >
                                             enviar
                                   </Button>
                              </Grid>
                         </Grid>

                    </form>

               </Main_styled>
       </div>
  );
}
