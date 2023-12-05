"use client";
import { Title } from '@mantine/core';
import VisualizeData from "../../visualize-data/VisualizeData";
import LabelDataText from "../../visualize-data/labelsData/LabelDataText";
import { useRouter } from 'next/navigation';
import { CLINICLIST } from '../../../constants/constants';

const getData = async () => {
    return CLINICLIST.map((clinic, index) => {
        return {
            idClinic: "5faafdk2k0r3" + index,
            nameClinic: clinic
        };
    })
}


const ClinicsAll = async () => {

    const router = useRouter();

    const dataExample = await getData();

    return (
        <main style={{ margin: "20px" }}>
            <VisualizeData
                content={
                    <>
                        <Title>Clínicas afiliadas</Title>
                        {
                            dataExample.map((clinicData) => (<LabelDataText key={clinicData.idClinic} title={`${clinicData.nameClinic}`} type='Nombre de clínica' subIcon={<Title style={{ cursor: 'pointer' }} onClick={() => router.push(`/menu/clinics/${clinicData.idClinic}/`)} order={6} >Ver más</Title>} />
                            ))
                        }

                    </>
                }
            />
        </main>
    )
}

export default ClinicsAll;
