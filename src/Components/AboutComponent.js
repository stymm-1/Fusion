import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderLeader(props) {
    const renlead= props.leaders.map((leader)=>{
    return(
          <Media className="mt-5"> 
        <Media left className="mr-5"> 
          <Media object src={leader.image} alt={leader.name} /> 
        </Media> 
        <Media body> 
          <Media heading>{leader.name}</Media> 
          <p>{leader.designation}</p> 
          {leader.description} 
        </Media> 
      </Media> 
    );
});


    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010,Fusion quickly established itself as a culinary icon par excellence in India. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in India.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Professor, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">14 Feb. 2010</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">ASA Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,234,567</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">35</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You don't need a silver fork to eat good food.</p>
                                <footer className="blockquote-footer"> Chef Paul Prudhomme.
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {renlead}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default RenderLeader;



   