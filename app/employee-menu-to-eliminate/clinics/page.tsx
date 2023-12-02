"use client";
import { Title } from '@mantine/core';
import VisualizeData from "../../../components/visualize-data/VisualizeData";
import LabelDataText from "../../../components/visualize-data/labelsData/LabelDataText";
import { useRouter } from 'next/navigation';

const getData =async ()=>{
    return [
        {
            idClinic: "5faafdk2k0r3",
            nameClinic: "Clínica los picapiedras"
        },
        {
            idClinic: "84dxm2m4xa423142",
            nameClinic: "Clínica Fantasia"
        },
        {
            idClinic: "420ixma46owdsad26",
            nameClinic: "Clínica salud dental"
        },
        {
            idClinic: "lgh03nmi30fa2q42141",
            nameClinic: "Vitalia clínica"
        }
    ]
}


const ClinicPage =async () => {

    const router = useRouter();

    const dataExample = await getData();

    return (
        <main style={{ margin: "20px" }}>
            <VisualizeData
                content={
                    <>
                        <Title>Clínicas afiliadas</Title>
                        {
                            dataExample.map((clinicData)=>(  <LabelDataText key={clinicData.idClinic} title={`${clinicData.nameClinic}`} type='Nombre de clínica' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/menu/clinics/${clinicData.idClinic}/`)} order={6} >Ver más</Title>} />
                            ))
                        }
                       
                    </>
                }
            />
        </main>
    )
}

export default ClinicPage;
