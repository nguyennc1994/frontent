import React, { Component } from 'react';
import '../Home.css';
class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                            <div className="card-header card-header-success card-header-icon">
                                <div className="card-icon">
                                <i className="material-icons">store</i>
                                </div>
                                <p className="card-category">Revenue</p>
                                <h3 className="card-title">$34,245</h3>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                <i className="material-icons">date_range</i> Last 24 Hours
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="card card-stats">
                            <div className="card-header card-header-danger card-header-icon">
                                <div className="card-icon">
                                <i className="material-icons">info_outline</i>
                                </div>
                                <p className="card-category">Fixed Issues</p>
                                <h3 className="card-title">75</h3>
                            </div>
                            <div className="card-footer">
                                <div className="stats">
                                <i className="material-icons">local_offer</i> Tracked from Github
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                            <div className="card-icon">
                            <i className="fa fa-twitter" />
                            </div>
                            <p className="card-category">Followers</p>
                            <h3 className="card-title">+245</h3>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons">update</i> Just Updated
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="card card-chart">
                        <div className="card-header card-header-success">
                            {/* <div className="ct-chart" id="dailySalesChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-line" style={{width: '100%', height: '100%'}}><g className="ct-grids"><line x1={40} x2={40} y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="98.33258928571428" x2="98.33258928571428" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="156.66517857142856" x2="156.66517857142856" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="214.99776785714286" x2="214.99776785714286" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="273.3303571428571" x2="273.3303571428571" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="331.66294642857144" x2="331.66294642857144" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="389.9955357142857" x2="389.9955357142857" y1={0} y2={120} className="ct-grid ct-horizontal" /><line y1={120} y2={120} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={96} y2={96} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={72} y2={72} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={48} y2={48} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={24} y2={24} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={0} y2={0} x1={40} x2="448.328125" className="ct-grid ct-vertical" /></g><g><g className="ct-series ct-series-a"><path d="M 40 91.2 C 98.333 79.2 98.333 79.2 98.333 79.2 C 156.665 103.2 156.665 103.2 156.665 103.2 C 214.998 79.2 214.998 79.2 214.998 79.2 C 273.33 64.8 273.33 64.8 273.33 64.8 C 331.663 76.8 331.663 76.8 331.663 76.8 C 389.996 28.8 389.996 28.8 389.996 28.8" className="ct-line" /><line x1={40} y1="91.2" x2="40.01" y2="91.2" className="ct-point" ct:value={12} opacity={1} /><line x1="98.33258928571428" y1="79.2" x2="98.34258928571428" y2="79.2" className="ct-point" ct:value={17} opacity={1} /><line x1="156.66517857142856" y1="103.2" x2="156.67517857142855" y2="103.2" className="ct-point" ct:value={7} opacity={1} /><line x1="214.99776785714286" y1="79.2" x2="215.00776785714285" y2="79.2" className="ct-point" ct:value={17} opacity={1} /><line x1="273.3303571428571" y1="64.8" x2="273.3403571428571" y2="64.8" className="ct-point" ct:value={23} opacity={1} /><line x1="331.66294642857144" y1="76.8" x2="331.67294642857144" y2="76.8" className="ct-point" ct:value={18} opacity={1} /><line x1="389.9955357142857" y1="28.799999999999997" x2="390.0055357142857" y2="28.799999999999997" className="ct-point" ct:value={38} opacity={1} /></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x={40} y={125} width="58.332589285714285" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>M</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="98.33258928571428" y={125} width="58.332589285714285" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>T</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="156.66517857142856" y={125} width="58.33258928571429" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>W</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="214.99776785714286" y={125} width="58.33258928571428" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>T</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="273.3303571428571" y={125} width="58.332589285714306" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>F</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="331.66294642857144" y={125} width="58.33258928571428" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>S</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="389.9955357142857" y={125} width="58.33258928571428" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '58px', height: '20px'}}>S</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={96} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={72} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>10</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={48} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>20</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={24} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>30</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={0} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>40</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={-30} x={0} height={30} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '30px', width: '30px'}}>50</span></foreignObject></g></svg></div> */}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Staffs</h4>
                            <p className="card-category">
                            <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> </p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons">access_time</i> updated 4 minutes ago
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-chart">
                        <div className="card-header card-header-warning">
                            {/* <div className="ct-chart" id="websiteViewsChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-bar" style={{width: '100%', height: '100%'}}><g className="ct-grids"><line y1={120} y2={120} x1={40} x2="443.328125" className="ct-grid ct-vertical" /><line y1={96} y2={96} x1={40} x2="443.328125" className="ct-grid ct-vertical" /><line y1={72} y2={72} x1={40} x2="443.328125" className="ct-grid ct-vertical" /><line y1={48} y2={48} x1={40} x2="443.328125" className="ct-grid ct-vertical" /><line y1={24} y2={24} x1={40} x2="443.328125" className="ct-grid ct-vertical" /><line y1={0} y2={0} x1={40} x2="443.328125" className="ct-grid ct-vertical" /></g><g><g className="ct-series ct-series-a"><line x1="56.80533854166667" x2="56.80533854166667" y1={120} y2="54.959999999999994" className="ct-bar" ct:value={542} opacity={1} /><line x1="90.41601562500001" x2="90.41601562500001" y1={120} y2="66.84" className="ct-bar" ct:value={443} opacity={1} /><line x1="124.02669270833334" x2="124.02669270833334" y1={120} y2="81.6" className="ct-bar" ct:value={320} opacity={1} /><line x1="157.63736979166666" x2="157.63736979166666" y1={120} y2="26.400000000000006" className="ct-bar" ct:value={780} opacity={1} /><line x1="191.248046875" x2="191.248046875" y1={120} y2="53.64" className="ct-bar" ct:value={553} opacity={1} /><line x1="224.85872395833334" x2="224.85872395833334" y1={120} y2="65.64" className="ct-bar" ct:value={453} opacity={1} /><line x1="258.4694010416667" x2="258.4694010416667" y1={120} y2="80.88" className="ct-bar" ct:value={326} opacity={1} /><line x1="292.08007812500006" x2="292.08007812500006" y1={120} y2="67.92" className="ct-bar" ct:value={434} opacity={1} /><line x1="325.69075520833337" x2="325.69075520833337" y1={120} y2="51.84" className="ct-bar" ct:value={568} opacity={1} /><line x1="359.3014322916667" x2="359.3014322916667" y1={120} y2="46.8" className="ct-bar" ct:value={610} opacity={1} /><line x1="392.91210937500006" x2="392.91210937500006" y1={120} y2="29.28" className="ct-bar" ct:value={756} opacity={1} /><line x1="426.52278645833337" x2="426.52278645833337" y1={120} y2="12.599999999999994" className="ct-bar" ct:value={895} opacity={1} /></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x={40} y={125} width="33.610677083333336" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>J</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="73.61067708333334" y={125} width="33.610677083333336" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>F</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="107.22135416666667" y={125} width="33.61067708333333" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>M</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="140.83203125" y={125} width="33.61067708333334" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>A</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="174.44270833333334" y={125} width="33.61067708333334" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>M</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="208.05338541666669" y={125} width="33.610677083333314" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>J</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="241.6640625" y={125} width="33.61067708333334" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>J</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="275.27473958333337" y={125} width="33.61067708333334" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>A</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="308.8854166666667" y={125} width="33.610677083333314" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>S</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="342.49609375" y={125} width="33.61067708333337" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>O</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="376.10677083333337" y={125} width="33.610677083333314" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>N</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="409.7174479166667" y={125} width="33.610677083333314" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '34px', height: '20px'}}>D</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={96} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={72} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>200</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={48} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>400</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={24} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>600</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={0} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>800</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={-30} x={0} height={30} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '30px', width: '30px'}}>1000</span></foreignObject></g></svg></div> */}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Customers</h4>
                            <p className="card-category">Last Campaign Performance</p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons">access_time</i> campaign sent 2 days ago
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-chart">
                        <div className="card-header card-header-danger">
                            {/* <div className="ct-chart" id="completedTask sChart"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" className="ct-chart-line" style={{width: '100%', height: '100%'}}><g className="ct-grids"><line x1={40} x2={40} y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="91.041015625" x2="91.041015625" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="142.08203125" x2="142.08203125" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="193.123046875" x2="193.123046875" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="244.1640625" x2="244.1640625" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="295.205078125" x2="295.205078125" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="346.24609375" x2="346.24609375" y1={0} y2={120} className="ct-grid ct-horizontal" /><line x1="397.287109375" x2="397.287109375" y1={0} y2={120} className="ct-grid ct-horizontal" /><line y1={120} y2={120} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={96} y2={96} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={72} y2={72} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={48} y2={48} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={24} y2={24} x1={40} x2="448.328125" className="ct-grid ct-vertical" /><line y1={0} y2={0} x1={40} x2="448.328125" className="ct-grid ct-vertical" /></g><g><g className="ct-series ct-series-a"><path d="M 40 92.4 C 91.041 30 91.041 30 91.041 30 C 142.082 66 142.082 66 142.082 66 C 193.123 84 193.123 84 193.123 84 C 244.164 86.4 244.164 86.4 244.164 86.4 C 295.205 91.2 295.205 91.2 295.205 91.2 C 346.246 96 346.246 96 346.246 96 C 397.287 97.2 397.287 97.2 397.287 97.2" className="ct-line" /><line x1={40} y1="92.4" x2="40.01" y2="92.4" className="ct-point" ct:value={230} opacity={1} /><line x1="91.041015625" y1={30} x2="91.051015625" y2={30} className="ct-point" ct:value={750} opacity={1} /><line x1="142.08203125" y1={66} x2="142.09203125" y2={66} className="ct-point" ct:value={450} opacity={1} /><line x1="193.123046875" y1={84} x2="193.133046875" y2={84} className="ct-point" ct:value={300} opacity={1} /><line x1="244.1640625" y1="86.4" x2="244.1740625" y2="86.4" className="ct-point" ct:value={280} opacity={1} /><line x1="295.205078125" y1="91.2" x2="295.215078125" y2="91.2" className="ct-point" ct:value={240} opacity={1} /><line x1="346.24609375" y1={96} x2="346.25609375" y2={96} className="ct-point" ct:value={200} opacity={1} /><line x1="397.287109375" y1="97.2" x2="397.297109375" y2="97.2" className="ct-point" ct:value={190} opacity={1} /></g></g><g className="ct-labels"><foreignObject style={{overflow: 'visible'}} x={40} y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>12p</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="91.041015625" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>3p</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="142.08203125" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>6p</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="193.123046875" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>9p</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="244.1640625" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>12p</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="295.205078125" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>3a</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="346.24609375" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>6a</span></foreignObject><foreignObject style={{overflow: 'visible'}} x="397.287109375" y={125} width="51.041015625" height={20}><span className="ct-label ct-horizontal ct-end" xmlns="http://www.w3.org/2000/xmlns/" style={{width: '51px', height: '20px'}}>9a</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={96} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>0</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={72} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>200</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={48} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>400</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={24} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>600</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={0} x={0} height={24} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '24px', width: '30px'}}>800</span></foreignObject><foreignObject style={{overflow: 'visible'}} y={-30} x={0} height={30} width={30}><span className="ct-label ct-vertical ct-start" xmlns="http://www.w3.org/2000/xmlns/" style={{height: '30px', width: '30px'}}>1000</span></foreignObject></g></svg></div> */}
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Customer Types</h4>
                            <p className="card-category">Last Campaign Performance</p>
                        </div>
                        <div className="card-footer">
                            <div className="stats">
                            <i className="material-icons">access_time</i> campaign sent 2 days ago
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-primary">
            <h4 className="card-title ">Statistic</h4>
            <p className="card-category"> Here is a subtitle for this table</p>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table">
                <thead className=" text-primary">
                  <tr><th>
                      ID
                    </th>
                    <th>
                      Name
                    </th>
                    <th>
                      Country
                    </th>
                    <th>
                      City
                    </th>
                    <th>
                      Salary
                    </th>
                  </tr></thead>
                <tbody>
                  <tr>
                    <td>
                      1
                    </td>
                    <td>
                      Dakota Rice
                    </td>
                    <td>
                      Niger
                    </td>
                    <td>
                      Oud-Turnhout
                    </td>
                    <td className="text-primary">
                      $36,738
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2
                    </td>
                    <td>
                      Minerva Hooper
                    </td>
                    <td>
                      Curaçao
                    </td>
                    <td>
                      Sinaai-Waas
                    </td>
                    <td className="text-primary">
                      $23,789
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3
                    </td>
                    <td>
                      Sage Rodriguez
                    </td>
                    <td>
                      Netherlands
                    </td>
                    <td>
                      Baileux
                    </td>
                    <td className="text-primary">
                      $56,142
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4
                    </td>
                    <td>
                      Philip Chaney
                    </td>
                    <td>
                      Korea, South
                    </td>
                    <td>
                      Overland Park
                    </td>
                    <td className="text-primary">
                      $38,735
                    </td>
                  </tr>
                  <tr>
                    <td>
                      5
                    </td>
                    <td>
                      Doris Greene
                    </td>
                    <td>
                      Malawi
                    </td>
                    <td>
                      Feldkirchen in Kärnten
                    </td>
                    <td className="text-primary">
                      $63,542
                    </td>
                  </tr>
                  <tr>
                    <td>
                      6
                    </td>
                    <td>
                      Mason Porter
                    </td>
                    <td>
                      Chile
                    </td>
                    <td>
                      Gloucester
                    </td>
                    <td className="text-primary">
                      $78,615
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
                    
      <div className="col-md-12">
        <div className="card">
          <div className="card-header card-header-warning">
            <h4 className="card-title">Employees Stats</h4>
            <p className="card-category">New employees on 15th September, 2016</p>
          </div>
          <div className="card-body table-responsive">
            <table className="table table-hover">
              <thead className="text-warning">
                <tr><th>ID</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Country</th>
                </tr></thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dakota Rice</td>
                  <td>$36,738</td>
                  <td>Niger</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Minerva Hooper</td>
                  <td>$23,789</td>
                  <td>Curaçao</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sage Rodriguez</td>
                  <td>$56,142</td>
                  <td>Netherlands</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Philip Chaney</td>
                  <td>$38,735</td>
                  <td>Korea, South</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
                    
                </div>
            </div>
        );
    }
}

export default Content;