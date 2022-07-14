import {
    Container,
    Header,
    RowContainer,
    TableContainer,
    TeamCard,
    TeamInstitution,
    TeamName,
} from "../Teams/TeamsStyle";
import React, { useState, useEffect } from "react";
import { toPersianNumber } from '../../utils/translateNumber';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const response = await fetch(process.env.REACT_APP_URL + "/api/u/users/registered/");
            // if (!response.ok) {
            //     throw new Error('Something went wrong!');
            // }

            setTeams(await response.json());
        };

        fetchTeams();
    }, []);

    const CreateTable = () => {
        const table = [];
        for (let i = 0; i < teams.length; i += 2) {
            table.push(
                <RowContainer>
                    <TeamCard>
                        <TeamName>{"مسافر شماره " + toPersianNumber(i+1).toString() + ":"}</TeamName>
                        <TeamInstitution>{teams[i].name +" "+ teams[i].last_name}</TeamInstitution>
                    </TeamCard>
                    {i + 1 < teams.length && <TeamCard>
                        <TeamName>{"مسافر شماره " + toPersianNumber(i+2).toString() + ":"}</TeamName>
                        <TeamInstitution>{teams[i+1].name +" "+ teams[i+1].last_name}</TeamInstitution>
                    </TeamCard>}    
                </RowContainer>
            );
        }
        return table;
    }

    return (
        <Container>
            <Header />
            <TableContainer>
                {CreateTable()}
            </TableContainer>
        </Container>
    )
};
export default Teams;