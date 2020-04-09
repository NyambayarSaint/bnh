import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPlusSquare, FaMinusSquare, FaWpforms } from 'react-icons/fa';
import DatePicker from "react-datepicker";
import '../Style/design.css';
import "react-datepicker/dist/react-datepicker.css";

class FormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '', imagePreviewUrl: '', file2: '', imagePreviewUrl2: '',
            experience: [
                {
                    months: 0,
                    company: '',
                    position: ''
                }
            ],
            dateToWork: new Date(),

        };
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file
    }

    handleDate = date => {
        this.setState({
            dateToWork: date
        });
    };

    handleChange = (e, i) => {

        if (i == null) {
            return this.setState({ [e.target.name]: e.target.value })
        }

        let { experience } = this.state
        experience[i][e.target.name] = e.target.name === "months" ? Number(e.target.value) : e.target.value
        this.setState({ experience })

    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let whichOne = e.target.tabIndex

        reader.onloadend = () => {
            whichOne === 0 ? this.setState({ file: file, imagePreviewUrl: reader.result }) : this.setState({ file2: file, imagePreviewUrl2: reader.result })
        }

        reader.readAsDataURL(file)
    }
    addExperience = () => {
        let { experience } = this.state
        experience.push({ months: 0, company: '', position: '' })
        this.setState({ experience });
    }
    decreaseExperience = (i) => {
        let { experience } = this.state
        experience.splice(i, 1);
        this.setState({ experience });
    }
    componentDidMount() {
        this.forceStateProperties();
    }
    forceStateProperties() {
        let slides = document.getElementsByClassName("check");
        let obj = { ...this.state }
        for (let i = 0; i < slides.length; i++) {
            let name = slides.item(i).name;
            obj[name] = "";
        }
        this.setState(obj)
    }
    check() {
        let tmp = 0;
        const pieces = Object.keys(this.state).length - 4
        const values = Object.values(this.state);
        for (const value of values) {
            if (value == "" || value == null || value == 0) tmp++
        }
        if (this.state.imagePreviewUrl == "") tmp--;
        if (this.state.imagePreviewUrl2 == "") tmp--;
        return { pieces, tmp }
    }

    render() {
        let { pieces, tmp } = this.check();
        let loadingProgress = pieces < 5 ? 0 : 100 - tmp / pieces * 100

        let { imagePreviewUrl } = this.state; let { imagePreviewUrl2 } = this.state;
        let $imagePreview = null; let $imagePreview2 = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText" style={{fontFamily: 'Montserrat',fontWeight:400, fontSize:22}}>Цээж зурагаа оруулна уу.</div>);
        }
        if (imagePreviewUrl2) {
            $imagePreview2 = (<img src={imagePreviewUrl2} />);
        } else {
            $imagePreview2 = (<div className="previewText" style={{fontFamily: 'Montserrat',fontWeight:400, fontSize:22}}>Иргэний үнэмлэхний зурагаа оруулна уу.</div>);
        }

        return (
            <Container style={{ marginTop: '50px', marginBottom: '50px' }} id="FormAnket">
                <div style={{ padding: 50, border: '1px solid rgba(0,0,0,0.1)' }}>
                    <Form>
                    <h2 style={{ padding: '30px', textAlign: 'center', margin: 0,paddingBottom:100, fontSize: 25, fontFamily: 'Montserrat' }}>Ажилд орох анкет</h2>

                        <Row>
                            <Col md={6}>
                                <div className="previewComponent">
                                    <div><Form.File tabIndex={0} className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)} /></div>
                                    <div className="imgPreview">{$imagePreview}</div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="previewComponent">
                                    <div><Form.File tabIndex={1} className="fileInput" type="file" onChange={(e) => this._handleImageChange(e)} /></div>
                                    <div className="imgPreview">{$imagePreview2}</div>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <strong>Хувийн мэдээллээ оруулна уу.</strong>
                        <Row>
                            <Col md={6}>
                                <Form.Control className="check" as="select" name="jobname" onChange={this.handleChange} value={this.state.jobname}>
                                    <option selected disabled>Сонирхож буй ажлын байр...</option>
                                    {Jobs.map((e, i) => <option key={i}>{e}</option>)}
                                </Form.Control>
                            </Col>
                            <Col md={6}>
                                <Form.Control className="check" as="select" name="source" onChange={this.handleChange} value={this.state.source}>
                                    <option selected disabled>Ажлын зар харсан эх сурвалж...</option>
                                    {Jobs.map((e, i) => <option key={i}>{e}</option>)}
                                </Form.Control>
                            </Col>
                            <Col md={6}><Form.Control className="check" type="text" placeholder="Овог" name="owog" onChange={this.handleChange} value={this.state.owog} /></Col>
                            <Col md={6}><Form.Control className="check" type="text" placeholder="Нэр" name="ner" onChange={this.handleChange} value={this.state.ner} /></Col>
                            <Col md={6}><Form.Control className="check" type="text" placeholder="Регистрийн дугаар (AC94081795)" name="registr" onChange={this.handleChange} value={this.state.registr} /></Col>
                            <Col md={6}><Form.Control className="check" type="text" placeholder="Утас (гар)" name="utas" onChange={this.handleChange} value={this.state.utas} /></Col>
                            <Col md={6}><Form.Control className="check" type="text" placeholder="Утас (гэр)" name="utas2" onChange={this.handleChange} value={this.state.utas2} /></Col>
                            <Col md={6}><Form.Control className="check" type="text" placeholder="Facebook хаяг" name="fb" onChange={this.handleChange} value={this.state.fb} /></Col>
                            <Col md={6}>
                                <Form.Control className="check" as="select" name="bolowsrol" onChange={this.handleChange} value={this.state.bolowsrol}>
                                    <option selected disabled>Боловсрол...</option>
                                    {Jobs.map((e, i) => <option key={i}>{e}</option>)}
                                </Form.Control>
                            </Col>
                            <Col md={6}><Form.Control className="check" as="textarea" rows="1" placeholder="Мэргэжил" name="mergerjil" onChange={this.handleChange} value={this.state.mergerjil} /></Col>
                            <Col md={6}>
                                <Form.Control className="check" as="select" name="gerbul" onChange={this.handleChange} value={this.state.gerbul}>
                                    <option selected disabled>Гэр бүлийн байдал...</option>
                                    {Jobs.map((e, i) => <option key={i}>{e}</option>)}
                                </Form.Control>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={12}><strong>Гэрийн хаяг</strong></Col>
                            <Col md={6}>
                                <Form.Control className="check" as="select" name="duureg" onChange={this.handleChange} value={this.state.duureg}>
                                    <option selected disabled>Дүүрэг...</option>
                                    {Jobs.map((e, i) => <option key={i}>{e}</option>)}
                                </Form.Control>
                            </Col>
                            <Col md={6}><Form.Control className="check" type="number" placeholder="Хороо" name="khoroo" onChange={this.handleChange} value={this.state.khoroo} /></Col>
                            <Col md={12}><Form.Control className="check" type="text" placeholder="Хаягийн дэлгэрэнгүй" name="khayag" onChange={this.handleChange} value={this.state.khayag} /></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={11}><strong>Ажлын туршлага</strong></Col>
                            <Col md={1}></Col>
                            <Col md={12}>
                                {this.state.experience.map((el, i) => {
                                    return <Row key={i}>
                                        <Col md={4}><Form.Control type="text" placeholder="Байгууллага" name="company" onChange={(e) => this.handleChange(e, i)} value={this.state.experience[i].company} /></Col>
                                        <Col md={4}><Form.Control type="text" placeholder="Албан тушаал" name="position" onChange={(e) => this.handleChange(e, i)} value={this.state.experience[i].position} /></Col>
                                        <Col md={3}><Form.Control type="number" placeholder="Ажилласан хугацаа (сараар)" onChange={(e) => this.handleChange(e, i)} name="months" /></Col>
                                        <Col md={1}>{i !== 0 ? <FaMinusSquare onClick={() => this.decreaseExperience(i)} style={{ marginTop: '18px', fontSize: 30 }} /> : <FaPlusSquare onClick={this.addExperience} style={{ marginTop: '18px', fontSize: 30 }} />}</Col>
                                    </Row>
                                })}
                            </Col>
                        </Row>
                        <hr />
                        <strong>Ажиллаж эхлэх боломжтой огноо</strong>
                        <Row>
                            <Col md={4}>
                                <DatePicker selected={this.state.dateToWork} onChange={this.handleDate} />
                            </Col>
                        </Row>
                    </Form>
                </div>
                <Row style={{marginTop:107}}>
                    <Container style={{position: 'fixed', bottom: '0px'}}>
                        <div style={{ textAlign: 'center', padding: '10px 50px', backgroundColor: '#e5e5e5' }}>
                            <div style={{ height: 10, backgroundColor: 'white', marginTop: 5, marginBottom: 10, padding: 2 }}>
                                <div style={{ position: 'absolute', left: '50%', marginLeft: '-12px', marginTop: '4px' }}>{Math.floor(loadingProgress)}%</div>
                                <div style={{ height: '100%', width: `${loadingProgress}%`, backgroundColor: 'black', transition:'0.5s ease' }}></div>
                            </div>
                            <Button onClick={this._handleSubmit} disabled={tmp == 0 ? false : true} style={{background: 'white', fontWeight: 'bold', fontFamily: 'Montserrat', color: 'black'}}>Анкет илгээх <FaWpforms /></Button>

                        </div>
                    </Container>
                </Row>
                
            </Container>
        );
    }
}

const Jobs = ['Choose one ...', 'Value #2', 'Value #3']

export default FormContainer;
