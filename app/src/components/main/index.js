import '../../App.css'
import { Main_styled } from './style';

import { Button, TextField } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import SaveIcon from '@material-ui/icons/Save';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Url_post } from '../services'

export default function Main() {

  const navigate=useNavigate()

  const [pais, setPais]=useState('')
  const [uf, setUf]=useState('')
  const [cidade, setCidade]=useState('')
  const [nome, setNome]=useState('')
  const [habilidade, setHabilidade]=useState('')
  
  useEffect(()=>{

  },[])

  async function requisicaoAjax(){

     let data={pais, uf, cidade, nome, habilidade}

     await fetch( Url_post,{method:'POST',
                      body:JSON.stringify(data),
                      headers:{'Content-Type':'application/json' }
     })
     .then(response=>{
          if(response.ok){
               response.json()
               navigate('/lista-de-mutantes', {replace: true})
               limpar()
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

  function limpar(){
     setPais('')
     setUf('')
     setCidade('')
     setNome('')
     setHabilidade('')
  }

  return (
       <div className='_MAIN'>
            <Main_styled>
             
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
