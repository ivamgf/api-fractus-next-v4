import * as React from 'react'
import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import ColorChips from '../chip'
import { Button } from '@mui/material'
import Divider from '@mui/material/Divider';

type typeProps = {
    title: string,
    description: string,
    subTitle1: string,
    endpoint1: string,
    subTitle2: string,
    endpoint2: string,
    subTitle3: string,
    endpoint3: string,
    subTitle4: string,
    endpoint4: string,
    subTitle5: string,
    endpoint5: string,
    subTitle6: string,
    manifest: string,
    note: string
}

export default function BasicCard(props: typeProps) {
    // URL Api deprecated
    // const url2 = "https://api-fractus-next.herokuapp.com"
    const url = "https://api-fractus.orkneytech.com.br"
    const endpoint = `${url}${props.endpoint1}`
    const jsonRoute = '/metadata/'   

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em' }}>
                    <ImgContainer>
                        <Image
                            src="/logo-fractus-cor.svg"
                            alt="Logo Fractus"
                            width={500}
                            height={150}
                        />
                    </ImgContainer>                    

                    <Typography
                        variant="h4"
                        style={{ textAlign: 'center', marginTop: '0.5em' }}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'center', marginTop: '1em', marginBottom: '2em' }}
                    >
                        {props.description}
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.subTitle1}
                    </Typography>
                    <ColorChips />
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        <Link 
                            href={endpoint}
                        >
                            {props.endpoint1}
                        </Link>
                    </Typography>                   
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                       {props.subTitle2}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.endpoint2}
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.subTitle3}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em', color: "#44AC34" }}
                    >                        
                       {props.endpoint3}
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.subTitle4}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em', color: "#FDD400" }}
                    >                        
                        {props.endpoint4}
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.subTitle5}
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em', color: "#E52024" }}
                    >                        
                        {props.endpoint5}
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h5"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.subTitle6}
                    </Typography>
                    <ColorChips />                    
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em', color: "#44AC34" }}
                    >                                              
                        <Link 
                            href={props.manifest}
                        >
                            {props.manifest}
                        </Link>                      
                        
                    </Typography>
                    <Link href={jsonRoute}>
                        <Button variant="contained" style={{borderRadius: '3em', width: '3em', height: '2em', marginTop: '1em', marginBottom: '1em'}}>JSON</Button>
                    </Link>
                    <Divider />
                    <Typography
                        variant="h6"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        Nota:
                    </Typography>
                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '1em' }}
                    >                        
                        {props.note}
                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>            
        </>
    )
}

const ImgContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 60%;
`
