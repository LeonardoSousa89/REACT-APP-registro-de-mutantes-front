import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core'

import '../../../App.css';
import Header from '../../header'
import { Data_styled } from './style';

import Title from '../../title';

export default function ShowData(){

 const [mutantes, setMutantes]=useState([])
 let idadmin=localStorage.getItem('idadmin')

  useEffect(()=>{

    /**teste */
    let Url_test1='http://localhost:8765/admin-mutantes-app/registro/all/conta/registro-de-mutantes'
    let Url_test2='http://localhost:8765/admin-mutantes-app/registro/all/mutantes/registro-de-mutantes'
    
    let Url_get=Url_test1
    fetch(Url_get,{method:'GET'})
      .then(response=>response.json())
      .then(response=>{
        //setMutantes(response)}
        console.log(response)
      })
      .catch(e=>console.error(e))
  
  },[])


  return (
    <div className="lista">

        <Header />

        <div className="container">
          
          <Grid container className="btn">
            <Grid item xs={4}>
              <Button type="submit"
                      variant="contained"   
                      color="secondary" 
                      size="large"
                      id="button">
                    <Link className="anchor" to={`/insercao/${idadmin}/registro-de-mutantes`}>
                      Voltar
                    </Link> 
              </Button>
            </Grid>
          </Grid>

          <Title title="Lista de Mutantes registrados" />

        </div>
       

        <Data_styled>
            { 

              mutantes.map(mutante=>{
                return(
                  <Grid container>
                    <Grid item xs={12}>
                      <List key={mutante.id} className="card">

                      <div className="data"> 
                        <List>
                             <h2>Nome:</h2>  {mutante.nome}
                        </List>

                        <List>
                             <h3>País:</h3> {mutante.pais}
                        </List>

                        <List>
                             <h3>Uf:</h3> {mutante.uf}
                        </List>

                        <List>
                             <h3>Cidade:</h3> {mutante.cidade}
                        </List>
                      </div>

                      <Divider /> 

                      <List>
                           <h3>Habilidades:</h3>  {mutante.habilidade}
                      </List>

                      </List>
                    </Grid>
                  </Grid>
                )
              })

            }

        </Data_styled>
    </div>
    );
}

