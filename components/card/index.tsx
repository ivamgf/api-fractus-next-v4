import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

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
    endpoint5: string
}

export default function BasicCard(props: typeProps) {
    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent style={{ minHeight: '20em' }}>
                    <Image
                        src="/logo-fractus-cor.svg"
                        alt="Logo Fractus"
                        width={500}
                        height={150}
                    />

                    <Typography
                        variant="body2"
                        style={{ textAlign: 'center', marginTop: '4em' }}
                    >
                        <h1>{props.title}</h1>
                        <h2>{props.description}</h2>
                    </Typography>

                    <Typography
                        variant="body2"
                        style={{ textAlign: 'left', marginTop: '4em' }}
                    >                        
                        <h3>{props.subTitle1}</h3>
                        <p>{props.endpoint1}</p>
                        <h3>{props.subTitle2}</h3>
                        <p>{props.endpoint2}</p>
                        <h3>{props.subTitle3}</h3>
                        <p>{props.endpoint3}</p>
                        <h3>{props.subTitle4}</h3>
                        <p>{props.endpoint4}</p>
                        <h3>{props.subTitle5}</h3>
                        <p>{props.endpoint5}</p>

                    </Typography>
                </CardContent>
                <CardActions></CardActions>
            </Card>
        </>
    )
}
