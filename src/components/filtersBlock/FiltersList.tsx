import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, InputGroup, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { SchoolModelFilter } from '../../models/SchoolModelFilter'


export function FiltersList(props: any) {
    const [schools, setSchools] = useState<SchoolModelFilter[]>([]);
    const [selectedSchools, setSelectedSchools] = useState<number[]>([]);
    const [schoolNameFilter, setSchoolNameFilter] = useState('');
    const [showMoreFilter, setShowMoreFilter] = useState(false);
    const handleToggleFiltersListMore = () => setShowMoreFilter(!showMoreFilter);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleClose = () => setShowOffcanvas(false);
    const toggleShow = () => setShowOffcanvas((s) => !s);

    const navigate = useNavigate();
    function handleClick(event: any) {
        navigate('/search-map');
    }

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

    const filtersOffcanvasStyleDesctop = {
        display: "flex", 
        flexDirection: props.isMain ? "column" : "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        alignItems: props.isMain ? "center" : "flex-start"
    };

    const filtersOffcanvasStyleMobile = {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
    };

    const filtersListStyleDesctop = {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "5px",
        border: "1px solid grey",
        borderRadius: "12px"
    };

    const filtersMoreListStyleDesctop = {
        display: showMoreFilter ? "flex" : "none",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "5px",
        border: "1px solid grey",
        borderRadius: "12px"
    };

    const filtersListStyleMobile = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5px",
    };

    const buttonDivStyle={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "13px",
        marginLeft: props.isMain ? "0px" : "20px",
        marginTop: props.isMain && !showOffcanvas ? "90px" : "0px",
        marginBottom: props.isMain ? "70px" : "0px"
    };
    
    const buttonStyle={
        borderColor: props.isMain && !showOffcanvas ? "white" : "gray",
        borderWidth: props.isMain && !showOffcanvas ? "0px" : "2px",
        width: props.isMain ? "220px" : "120px",
        height: props.isMain ? "60px" : "45px",
        borderRadius: props.isMain ? "13px" : "6px"
    };

    const toggleButtonStyle={
        width: props.isMain ? "300px" : "300px",
        height: props.isMain ? "70px" : "50px",
        marginBottom: props.isMain ? "130px" : "0px",
        border: "1px solid grey",
        backgroundColor: "white"
    };

    return (
        <>
            <Navbar key="md" expand="md" className="bg-body-tertiary">
                <Navbar.Toggle className="toggleButtonFilter" style={toggleButtonStyle} aria-controls="basic-navbar-nav" onClick={toggleShow}>Фильтры</Navbar.Toggle>
                <Navbar.Collapse className="entryBlock" id="basic-navbar-nav">
                <Navbar.Offcanvas
                    className="filtersOffcanvas"
                    id="offcanvasNavbar-expand-md"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    placement="top"
                    onHide={handleClose}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Фильтры</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={showOffcanvas ? filtersOffcanvasStyleMobile as React.CSSProperties : filtersOffcanvasStyleDesctop as React.CSSProperties}>
                            <div style={showOffcanvas ? filtersListStyleMobile as React.CSSProperties : filtersListStyleDesctop as React.CSSProperties}>
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
                                <div className="priceButton">
                                    <InputGroup className="">
                                        <InputGroup.Text>Цена</InputGroup.Text>
                                        <Form.Control placeholder="от"/>
                                        <Form.Control placeholder="до"/>
                                    </InputGroup>
                                </div>
                                <Button className="filtersLastButtonMore" variant="light" data-bs-theme="light" style={{display: showOffcanvas ? "none" : "block"}} onClick={handleToggleFiltersListMore}>Еще</Button>
                            </div>
                            <div style={showOffcanvas ? filtersListStyleMobile as React.CSSProperties : filtersMoreListStyleDesctop as React.CSSProperties} >
                                    <DropdownButton className="filtersFirstButton" variant="light" id="dropdown-basic-button" title="Количество комнат" data-bs-theme="light">
                                        <Form className="numberRoomsFilter">
                                            <Form.Check label="Студия" />
                                            <Form.Check label="1" />
                                            <Form.Check label="2" />
                                            <Form.Check label="3" />
                                            <Form.Check label="4" />
                                            <Form.Check label="5" />
                                        </Form>  
                                    </DropdownButton>
                                    <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Материал стен" data-bs-theme="light">
                                        <Form className="materialFilter">
                                            <Form.Check label="Кирпичный" />
                                            <Form.Check label="Монолитный" />
                                            <Form.Check label="Панельный" />
                                            <Form.Check label="Блочный" />
                                            <Form.Check label="Железобетонный" />
                                        </Form>
                                    </DropdownButton><DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Этаж" data-bs-theme="light">
                                        <Form className="floorFilter">
                                            <InputGroup>
                                                <Form.Control placeholder="с"/>
                                                <Form.Control placeholder="по"/>
                                            </InputGroup>
                                            <Form>
                                                <Form.Check label="Не первый" />
                                                <Form.Check label="Не последний" />
                                            </Form>
                                        </Form>
                                    </DropdownButton>
                                    <DropdownButton className="filtersLastButton" variant="light" id="dropdown-basic-button" title="Год постройки" data-bs-theme="light">
                                        <Form className="yearFilter">
                                            <InputGroup>
                                                <Form.Control placeholder="с"/>
                                                <Form.Control placeholder="по"/>
                                            </InputGroup>
                                        </Form>
                                    </DropdownButton>
                            </div>
                            <div style={buttonDivStyle}>
                                <Button className="searchButton" style={buttonStyle} variant="light" onClick={handleClick}>Найти</Button>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}