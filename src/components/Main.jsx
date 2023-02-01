import { useState } from "react"
import { BaseColaboradores } from "../BaseColaboradores"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Principal = () => {
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [lista, setLista] = useState(BaseColaboradores)
    const [numId, setNumId] = useState(4)
    const [consulta, setConsulta] = useState('')

    const agregarColab = (e) => {
        e.preventDefault()
        setLista([...lista, { id: numId.toString(), nombre: nombre, correo: mail }])
        setNumId(numId + 1)
        setNombre('')
        setMail('')
    }

    return (
        <div>
            <Navbar className="bg-dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand className='text-light fw-semibold'>Buscador de Colaboradores</Navbar.Brand>
                    <Navbar.Collapse className='justify-content-end'>
                        <Form>
                            <Form.Control
                                onChange={e => setConsulta(e.target.value)}
                                type="search"
                                placeholder="Buscar un colaborador"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="m-5">
            <Form onSubmit={agregarColab}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nombre del colaborador</Form.Label>
                    <Form.Control onChange={e => {
                                                setNombre(e.target.value)}} 
                                                value={nombre} 
                                                type="text" 
                                                placeholder="Ingresa el nombre del colaborador" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo del colaborador</Form.Label>
                    <Form.Control onChange={e => {
                                                setMail(e.target.value)}} 
                                                value={mail} 
                                                type="email" 
                                                placeholder="Ingresa el correo del colaborador" />
                </Form.Group>
                <Button type="submit" value="Submit">Agregar colaborador</Button>
            </Form>
            <hr/>
            <h2 className='listTitle'>Lista de colaboradores</h2>
            <ul>
                {lista.filter(data => data.nombre.toLowerCase().includes(consulta)).map(data => <li
                    key={data.id}
                    onClick={() => console.log(data)}>
                    {data.nombre} - {data.correo}
                </li>)}
            </ul>
            </div>
        </div>
    )
}

export default Principal