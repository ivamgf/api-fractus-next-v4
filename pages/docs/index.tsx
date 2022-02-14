import React from 'react'
import styled from 'styled-components'

import BasicCard from '../../components/card'

export default function Docs() {

    const content = {
        title: "Documentação da Api",
        description: "Descrição dos endpoints da Api.",
        subTitle1: "Consulta do conteúdo de todas as aulas",
        endpoint1: "/api/classes",
        subTitle2: "Consulta do conteúdo de uma aula",
        endpoint2: "/api/classes/{id}",
        subTitle3: "Registro de Aula",
        endpoint3: "/api/addClass/",
        subTitle4: "Atualização do conteúdo de uma aula",
        endpoint4: "/api/updateClasses/{id}",
        subTitle5: "Remover aula",
        endpoint5: "api/remove/{id}"
    }

    return (
       <Main>
           <BasicCard 
                title={content.title} 
                description={content.description}
                subTitle1={content.subTitle1}
                endpoint1={content.endpoint1}
                subTitle2={content.subTitle2}
                endpoint2={content.endpoint2}
                subTitle3={content.subTitle3}
                endpoint3={content.endpoint3}
                subTitle4={content.subTitle4}
                endpoint4={content.endpoint4}
                subTitle5={content.subTitle5}
                endpoint5={content.endpoint5}
            />
       </Main>
    )
}

const Main = styled.div`
    margin: 2em 2em;
`
