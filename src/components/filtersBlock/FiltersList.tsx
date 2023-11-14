import { InputGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';


export function FiltersList() {
    return (
        <div className="filtersList" >
            <DropdownButton className="filtersFirstButton" variant="light" id="dropdown-basic-button" title="Тип жилья" data-bs-theme="light">
                <Form>
                    <Form.Check label="Новостройка" />
                    <Form.Check label="Вторичное жилье" />
                </Form>  
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Школа" data-bs-theme="light">
                {/* Фильтры */}
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Расстояние до школы" data-bs-theme="light">
                <Form>
                    <Form.Check label="5 минут" />
                    <Form.Check label="10 минут" />
                    <Form.Check label="15 минут" />
                    <Form.Check label="20 минут" />
                    <Form.Check label="30 минут" />
                </Form> 
            </DropdownButton>
            <DropdownButton className="filtersButton" variant="light" id="dropdown-basic-button" title="Количество комнат" data-bs-theme="light">
                <Form>
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