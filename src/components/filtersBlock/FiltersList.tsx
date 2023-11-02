import { InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';

export function FiltersList() {
    return (
        <div className="filtersList" >
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Купить" data-bs-theme="light">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Город" data-bs-theme="light">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Комнат" data-bs-theme="light">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Школа" data-bs-theme="light">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <div className="priceButton">
                <InputGroup>
                    <InputGroup.Text>Цена</InputGroup.Text>
                    <Form.Control placeholder="от"/>
                    <Form.Control placeholder="до"/>
                </InputGroup>
            </div>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Еще" data-bs-theme="light">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}