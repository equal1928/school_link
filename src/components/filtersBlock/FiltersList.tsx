import axios from 'axios';
import { useEffect, useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

import { SchoolModel } from '../../models/SchoolModel'


export function FiltersList() {
    const [schools, setSchools] = useState<SchoolModel[]>([]);
    const [selectedSchools, setSelectedSchools] = useState<number[]>([]);
    const [schoolNameFilter, setSchoolNameFilter] = useState('');

    useEffect(() => {
        axios.get('https://retoolapi.dev/BwAFP7/data')
            .then(response => {
                setSchools(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleSchoolCheckboxChange = (schoolId: number) => {
        const updatedSelectedSchools = selectedSchools.includes(schoolId)
            ? selectedSchools.filter(id => id !== schoolId)
            : [...selectedSchools, schoolId];

        setSelectedSchools(updatedSelectedSchools);
    };


    const renderSchoolCheckboxes = () => {
        return schools
            .filter(school => school && school.name && school.name.toLowerCase().includes(schoolNameFilter.toLowerCase()))
            .map(school => (
                <Form.Check
                    key={school.id}
                    type="checkbox"
                    label={school.name}
                    checked={selectedSchools.includes(school.id)}
                    onChange={() => handleSchoolCheckboxChange(school.id)}
                />
            ));
    };

    return (
        <div className="filtersList" >
            <DropdownButton className="filtersFirstButton" variant="light" id="dropdown-basic-button" title="Тип жилья" data-bs-theme="light">
                <Form className="typeHousFilter">
                    <Form.Check label="Новостройка" />
                    <Form.Check label="Вторичное жилье" />
                </Form>  
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Школа" data-bs-theme="light">
                <Form className="schoolListFilter">
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Название школы"
                            value={schoolNameFilter}
                            onChange={(e) => setSchoolNameFilter(e.target.value)}
                        />
                    </InputGroup>
                    <Form.Group>
                        {renderSchoolCheckboxes()}
                    </Form.Group>
                </Form>
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Расстояние до школы" data-bs-theme="light">
                <Form className="timeSchoolFilter">
                    <Form.Check label="5 минут" />
                    <Form.Check label="10 минут" />
                    <Form.Check label="15 минут" />
                    <Form.Check label="20 минут" />
                    <Form.Check label="30 минут" />
                </Form> 
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Количество комнат" data-bs-theme="light">
                <Form className="numberRoomsFilter">
                    <Form.Check label="Студия" />
                    <Form.Check label="1" />
                    <Form.Check label="2" />
                    <Form.Check label="3" />
                    <Form.Check label="4" />
                    <Form.Check label="5" />
                </Form>  
            </DropdownButton>
            <div className="priceButton">
                <InputGroup>
                    <InputGroup.Text>Цена</InputGroup.Text>
                    <Form.Control placeholder="от"/>
                    <Form.Control placeholder="до"/>
                </InputGroup>
            </div>
            <DropdownButton className="filtersLastButton" variant="light" id="dropdown-basic-button" title="Еще" data-bs-theme="light">
                <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Год постройки" data-bs-theme="light">
                    <InputGroup>
                        <Form.Control placeholder="с"/>
                        <Form.Control placeholder="по"/>
                    </InputGroup>
                </DropdownButton>
                <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Материал стен" data-bs-theme="light">
                    <Form>
                        <Form.Check label="Кирпичный" />
                        <Form.Check label="Монолитный" />
                        <Form.Check label="Панельный" />
                        <Form.Check label="Блочный" />
                        <Form.Check label="Железобетонный" />
                    </Form>
                </DropdownButton><DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Этаж" data-bs-theme="light">
                    <InputGroup>
                        <Form.Control placeholder="с"/>
                        <Form.Control placeholder="по"/>
                    </InputGroup>
                    <Form>
                        <Form.Check label="Не первый" />
                        <Form.Check label="Не последний" />
                    </Form>
                </DropdownButton>
            </DropdownButton>
        </div>
    )
}