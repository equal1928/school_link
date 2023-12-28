import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import {Button, Image, InputGroup, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { SchoolModelFilter } from '../../models/SchoolModelFilter'
import checkIcon from "../images/checkIcon.png";
import filterImg from '../images/filter.png'


export function FiltersList({ isMainPage = false }: { isMainPage?: boolean }) {
    const [schools, setSchools] = useState<SchoolModelFilter[]>([]);
    const [schoolNameFilter, setSchoolNameFilter] = useState('');
    const [showMoreFilter, setShowMoreFilter] = useState(false);
    const handleToggleFiltersListMore = () => setShowMoreFilter(!showMoreFilter);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleClose = () => setShowOffcanvas(false);
    const toggleShow = () => setShowOffcanvas((s) => !s);

    //Фильтры
    const [selectedTypeHous, setSelectedTypeHous] = useState<string[]>([]);
    const [selectedSchools, setSelectedSchools] = useState<number[]>([]);
    const [selectedTime, setSelectedTime] = useState<number[]>([]);
    const [minPrice, setMinPrice] = useState<number>();
    const [maxPrice, setMaxPrice] = useState<number>();
    const [selectedRooms, setSelectedRooms] = useState<number[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
    const [minFloor, setMinFloor] = useState<number>();
    const [maxFloor, setMaxFloor] = useState<number>();
    const [excludeFirst, setExcludeFirst] = useState<boolean>(false);
    const [excludeLast, setExcludeLast] = useState<boolean>(false);
    const [minYear, setMinYear] = useState<number>();
    const [maxYear, setMaxYear] = useState<number>();

    const navigate = useNavigate();
    function handleSearchSchoolClick(event: any) {
        navigate('/search-map?schoolsOnly=true');
        if (window.location.pathname === '/search-map')
            window.location.reload();
    }
    const handleSearchButtonClick = () => {
        const queryParams = {
          typeHous: selectedTypeHous.join(','),
          schools: selectedSchools.join(','),
          time: selectedTime.join(','),
          minPrice,
          maxPrice,
          rooms: selectedRooms.join(','),
          materials: selectedMaterials.join(','),
          minFloor,
          maxFloor,
          excludeFirst,
          excludeLast,
          minYear,
          maxYear,
        };

        const queryString = Object.entries(queryParams).map(([key, value]) => {
            const encodedValue = encodeURIComponent(value || '');
            return `${key}=${encodedValue}`;
        }).join('&');
        
        const pathUrl = window.location.pathname;
        if (pathUrl === "/search-list")
            navigate(`/search-list?${queryString}`);
        else 
            navigate(`/search-map?${queryString}`);
        window.location.reload();
      };

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

    const handleSelectedTypeHousChange = (label: string) => {
        const updatedSelectedTypeHous = selectedTypeHous.includes(label)
            ? selectedTypeHous.filter(item => item !== label)
            : [...selectedTypeHous, label];
        setSelectedTypeHous(updatedSelectedTypeHous);
    };

    const handleTimeChange = (time: number) => {
        const updatedSelectedTime = selectedTime.includes(time)
            ? selectedTime.filter(item => item !== time)
            : [...selectedTime, time];
        setSelectedTime(updatedSelectedTime);
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value));
    };

    const handleRoomsChange = (rooms: number) => {
        const updatedSelectedRooms = selectedRooms.includes(rooms)
            ? selectedRooms.filter(item => item !== rooms)
            : [...selectedRooms, rooms];
        setSelectedRooms(updatedSelectedRooms);
    };

    const handleMaterialsChange = (label: string) => {
        const updatedSelectedMaterials = selectedMaterials.includes(label)
            ? selectedMaterials.filter(item => item !== label)
            : [...selectedMaterials, label];
        setSelectedMaterials(updatedSelectedMaterials);
    };    

    const handleMinFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinFloor(Number(event.target.value));
    };

    const handleMaxFloorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxFloor(Number(event.target.value));
    };

    const handleExcludeFirstChange = (event: ChangeEvent<HTMLInputElement>) => {
        setExcludeFirst(Boolean(event.target.checked));
    };

    const handleExcludeLastChange = (event: ChangeEvent<HTMLInputElement>) => {
        setExcludeLast(Boolean(event.target.checked));
    };

    const handleMinYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinYear(Number(event.target.value));
    };

    const handleMaxYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxYear(Number(event.target.value));
    };

    useEffect(() => {
        if (!isMainPage) {
            const currentUrl = window.location.search;
            const urlParams = new URLSearchParams(currentUrl);
            
            const typeHousePar = urlParams.get('typeHous');
            setSelectedTypeHous(typeHousePar ? typeHousePar.split(",") : []);
            
            const schoolsPar = urlParams.get('schools');
            setSelectedSchools(schoolsPar ? schoolsPar.split(",").map(Number) : []);

            const timePar = urlParams.get('time');
            setSelectedTime(timePar ? timePar.split(",").map(Number) : []);

            const parsedMinPrice = urlParams.get('minPrice');
            setMinPrice(parsedMinPrice ? parseInt(parsedMinPrice, 10) : undefined);
            const parsedMaxPrice = urlParams.get('maxPrice');
            setMaxPrice(parsedMaxPrice ? parseInt(parsedMaxPrice, 10) : undefined);

            const roomsPar = urlParams.get('rooms');
            setSelectedRooms(roomsPar ? roomsPar.split(",").map(Number) : []);

            const materialsPar = urlParams.get('materials');
            setSelectedMaterials(materialsPar ? materialsPar.split(",") : []);

            const parsedMinFloor = urlParams.get('minFloor');
            setMinFloor(parsedMinFloor ? parseInt(parsedMinFloor, 10) : undefined);
            const parsedMaxFloor= urlParams.get('maxFloor');
            setMaxFloor(parsedMaxFloor ? parseInt(parsedMaxFloor, 10) : undefined);

            setExcludeFirst(urlParams.get('excludeFirst') === 'true');
            setExcludeLast(urlParams.get('excludeLast') === 'true');

            const parsedMinYear = urlParams.get('minYear');
            setMinYear(parsedMinYear ? parseInt(parsedMinYear, 10) : undefined);
            const parsedMaxYear= urlParams.get('maxYear');
            setMaxYear(parsedMaxYear ? parseInt(parsedMaxYear, 10) : undefined);
        }
    }, []);


    const filtersOffcanvasStyleDesctop = {
        display: "flex", 
        flexDirection: isMainPage ? "column" : "row", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        alignItems: isMainPage ? "center" : "flex-start"
    };

    const filtersOffcanvasStyleMobile = {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        backgroundColor: "lightgrey!important"
    };

    const filtersListStyleDesctop = {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        border: "1px solid lightgrey",
        borderRadius: "4px"
    };

    const filtersMoreListStyleDesctop = {
        display: showMoreFilter ? "flex" : "none",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: "5px",
        border: "1px solid lightgrey",
        borderRadius: "4px",
    };

    const filtersListStyleMobile = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const wrapperMainDesktop = {
        width: "max-content",
        // position: isMainPage ? "relative" : "block",
        top: isMainPage ? "320px" : "0px",
        backgroundColor: isMainPage ? "white!important" : "none",
        borderRadius: "4px!important",
        boxShadow: isMainPage ? "0 4px 16px 0 rgba(0,0,0,0.15)!important" : "none",
        borderColor: isMainPage ? "whitesmoke!important" : "none",
        padding: isMainPage ? "15px" : "0px"
    };

     const wrapperMainMobile = {
        width: "100%",
        height: "100vh",
        // position: isMainPage ? "relative" : "block",
        top: isMainPage ? "320px" : "0px",
        backgroundColor: "yellow!important",
        borderRadius: "4px!important",
        boxShadow: isMainPage ? "0 4px 16px 0 rgba(0,0,0,0.15)!important" : "none",
        borderColor: isMainPage ? "whitesmoke!important" : "none",
        padding: isMainPage ? "15px" : "0px"
    };

    const buttonBlock ={
        display: isMainPage ? "block" : "none",
        background: "white",
        // position: "relative",
        top: isMainPage ? "310px" : "0px",
        borderRadius: "4px!important",
        boxShadow: isMainPage ? "0 4px 16px 0 rgba(0,0,0,0.15)!important" : "none",
        borderColor: isMainPage ? "whitesmoke!important" : "none"
    }

     const buttonBlockMobile ={
        display: isMainPage ? "block" : "none",
        background: "white",
        // position: "relative",
        top: isMainPage ? "210px" : "0px",
        borderRadius: "4px!important",
        boxShadow: isMainPage ? "0 4px 16px 0 rgba(0,0,0,0.15)!important" : "none",
        borderColor: isMainPage ? "whitesmoke!important" : "none"
    }

    const buttonDivStyle={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "13px",
        marginLeft: isMainPage ? "0px" : "20px",
        marginTop: isMainPage && !showOffcanvas ? "90px" : "0px",
        marginBottom: isMainPage ? "70px" : "0px"
    };
    
    const buttonStyle={
        borderColor: isMainPage && !showOffcanvas ? "white" : "none",
        borderWidth: isMainPage && !showOffcanvas ? "0px" : "0px",
        width: isMainPage ? "120px" : "120px",
        height: isMainPage ? "60px" : "50px",
        borderRadius: isMainPage ? "4px" : "4px",
        backgroundColor: "lightgrey !important",
        alignSelf: isMainPage ? "flex-end" : "center"
    };

    const toggleButtonStyle={
        display: isMainPage ? "none" : "block",
        padding: "5px 8px",
        alignSelf: "flex-end",
        marginRight: "10px",
        borderRadius: "4px!important",
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.15)!important",
        borderColor: "whitesmoke!important"
    };


    return (
        <>
            <div className="buttonBlock" style={showOffcanvas ? buttonBlockMobile as React.CSSProperties : buttonBlock as React.CSSProperties}>
                <p className="callText">Найди свою</p>
                <Button className="firstButton" variant="light"
                        onClick={handleSearchSchoolClick}>Квартиру</Button>
                <Button className="secondButton" variant="light"
                        onClick={handleSearchSchoolClick}>Школу</Button>
            </div>
            <Navbar key="sm" expand="sm" className="bg-body-tertiary">
                <Navbar.Toggle className="toggleButtonFilter" style={toggleButtonStyle} aria-controls="basic-navbar-nav"
                               onClick={toggleShow}><Image className="filterImg" src={filterImg} /></Navbar.Toggle>
                <Navbar.Collapse className="entryBlock" id="basic-navbar-nav">
                    <Navbar.Offcanvas
                        className="filtersOffcanvas"
                        id="offcanvasNavbar-expand-md"
                        aria-labelledby="offcanvasNavbarLabel-expand-md"
                        placement="top"
                        onHide={handleClose}
                    >
                        <div className="wrapper" style={showOffcanvas ? wrapperMainMobile as React.CSSProperties : wrapperMainDesktop as React.CSSProperties}>
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Фильтры</Offcanvas.Title>
                        </Offcanvas.Header>
                            <Offcanvas.Body
                                style={showOffcanvas ? filtersOffcanvasStyleMobile as React.CSSProperties : filtersOffcanvasStyleDesctop as React.CSSProperties}>
                            <div
                                style={showOffcanvas ? filtersListStyleMobile as React.CSSProperties : filtersListStyleDesctop as React.CSSProperties}>
                                <DropdownButton className="filtersFirstButton" variant="light"
                                                id="dropdown-basic-button"
                                                title="Новостройки,вторичка" data-bs-theme="light">
                                    <Form className="typeHousFilter">
                                        <Form.Check label="Новостройка"
                                                    checked={selectedTypeHous.includes("Новостройка")}
                                                    onChange={() => handleSelectedTypeHousChange("Новостройка")}/>
                                        <Form.Check label="Вторичный рынок"
                                                    checked={selectedTypeHous.includes("Вторичное жилье")}
                                                    onChange={() => handleSelectedTypeHousChange("Вторичное жилье")}/>
                                    </Form>
                                </DropdownButton>
                                <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button"
                                                title="Школа по прописке" data-bs-theme="light">
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
                                <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button"
                                                title="Расстояние до школы" data-bs-theme="light">
                                    <Form className="timeSchoolFilter">
                                        <Form.Check label="5 минут"
                                                    checked={selectedTime.includes(5)}
                                                    onChange={() => handleTimeChange(5)}/>
                                        <Form.Check label="10 минут"
                                                    checked={selectedTime.includes(10)}
                                                    onChange={() => handleTimeChange(10)}/>
                                        <Form.Check label="15 минут"
                                                    checked={selectedTime.includes(15)}
                                                    onChange={() => handleTimeChange(15)}/>
                                        <Form.Check label="20 минут"
                                                    checked={selectedTime.includes(20)}
                                                    onChange={() => handleTimeChange(20)}/>
                                        <Form.Check label="30 минут"
                                                    checked={selectedTime.includes(30)}
                                                    onChange={() => handleTimeChange(30)}/>
                                    </Form>
                                </DropdownButton>
                                <div className="priceButton">
                                    <InputGroup className="">
                                        <InputGroup.Text>Цена</InputGroup.Text>
                                        <Form.Control
                                            type="number"
                                            min="0"
                                            placeholder="от"
                                            value={minPrice}
                                            onChange={handleMinPriceChange}/>
                                        <Form.Control
                                            type="number"
                                            min="0"
                                            placeholder="до"
                                            value={maxPrice}
                                            onChange={handleMaxPriceChange}/>
                                    </InputGroup>
                                </div>
                                <Button className="filtersLastButtonMore" variant="light" data-bs-theme="light"
                                        style={{display: showOffcanvas ? "none" : "block"}}
                                        onClick={handleToggleFiltersListMore}>
                                    {/*<img className="filterImg" src="../images/filter.png"/>*/}
                                    <Image className="filterImg" src={filterImg} />
                                </Button>
                            </div>
                            <div
                                style={showOffcanvas ? filtersListStyleMobile as React.CSSProperties : filtersMoreListStyleDesctop as React.CSSProperties}>
                                <DropdownButton className="filtersFirstButton" variant="light"
                                                id="dropdown-basic-button"
                                                title="Количество комнат" data-bs-theme="light">
                                    <Form className="numberRoomsFilter">
                                        <Form.Check label="Студия"
                                                    checked={selectedRooms.includes(0)}
                                                    onChange={() => handleRoomsChange(0)}/>
                                        <Form.Check label="1"
                                                    checked={selectedRooms.includes(1)}
                                                    onChange={() => handleRoomsChange(1)}/>
                                        <Form.Check label="2"
                                                    checked={selectedRooms.includes(2)}
                                                    onChange={() => handleRoomsChange(2)}/>
                                        <Form.Check label="3"
                                                    checked={selectedRooms.includes(3)}
                                                    onChange={() => handleRoomsChange(3)}/>
                                        <Form.Check label="4"
                                                    checked={selectedRooms.includes(4)}
                                                    onChange={() => handleRoomsChange(4)}/>
                                        <Form.Check label="5"
                                                    checked={selectedRooms.includes(5)}
                                                    onChange={() => handleRoomsChange(5)}/>
                                    </Form>
                                </DropdownButton>
                                <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button"
                                                title="Материал стен" data-bs-theme="light">
                                    <Form className="materialFilter">
                                        <Form.Check label="Кирпичный"
                                                    checked={selectedMaterials.includes("Кирпичный")}
                                                    onChange={() => handleMaterialsChange("Кирпичный")}/>
                                        <Form.Check label="Монолитный"
                                                    checked={selectedMaterials.includes("Монолитный")}
                                                    onChange={() => handleMaterialsChange("Монолитный")}/>
                                        <Form.Check label="Панельный"
                                                    checked={selectedMaterials.includes("Панельный")}
                                                    onChange={() => handleMaterialsChange("Панельный")}/>
                                        <Form.Check label="Блочный"
                                                    checked={selectedMaterials.includes("Блочный")}
                                                    onChange={() => handleMaterialsChange("Блочный")}/>
                                        <Form.Check label="Железобетонный"
                                                    checked={selectedMaterials.includes("Железобетонный")}
                                                    onChange={() => handleMaterialsChange("Железобетонный")}/>
                                    </Form>
                                </DropdownButton><DropdownButton className="filtersButton" variant="light"
                                                                 id="dropdown-basic-button" title="Этаж"
                                                                 data-bs-theme="light">
                                <Form className="floorFilter">
                                    <InputGroup>
                                        <Form.Control type="number"
                                                      placeholder="с"
                                                      value={minFloor}
                                                      onChange={handleMinFloorChange}/>
                                        <Form.Control type="number"
                                                      placeholder="по"
                                                      value={maxFloor}
                                                      onChange={handleMaxFloorChange}/>
                                    </InputGroup>
                                    <Form>
                                        <Form.Check label="Не первый"
                                                    checked={excludeFirst}
                                                    onChange={handleExcludeFirstChange}/>
                                        <Form.Check label="Не последний"
                                                    checked={excludeLast}
                                                    onChange={handleExcludeLastChange}/>
                                    </Form>
                                </Form>
                            </DropdownButton>
                                <DropdownButton className="filtersLastButton" variant="light" id="dropdown-basic-button"
                                                title="Год постройки" data-bs-theme="light">
                                    <Form className="yearFilter">
                                        <InputGroup>
                                            <Form.Control type="number"
                                                          min="0"
                                                          placeholder="с"
                                                          value={minYear}
                                                          onChange={handleMinYearChange}/>
                                            <Form.Control type="number"
                                                          min="0"
                                                          placeholder="по"
                                                          value={maxYear}
                                                          onChange={handleMaxYearChange}/>
                                        </InputGroup>
                                    </Form>
                                </DropdownButton>
                            </div>
                            {/*<div className="bottomWrapper">*/}
                                <Button className="searchButton" style={buttonStyle} variant="light"
                                        onClick={handleSearchButtonClick}>Найти</Button>
                            {/*</div>*/}
                        </Offcanvas.Body>
                        </div>
                    </Navbar.Offcanvas>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}