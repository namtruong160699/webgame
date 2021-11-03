@extends('admin::layouts.master',[
    'page_title' => 'Dashboard',
    'menu_open' => 'dashboard',
    'current_menu' => 'dashboard',
])
@section('content')
<div class="page-content-wrapper-inner">
    <div class="content-viewport">
    <div class="row">
        <div class="col-12 py-5">
        <h4>Dashboard</h4>
        <p class="text-gray">Welcome aboard, Allen Clerk</p>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-sm-6 col-6 equel-grid">
        <div class="grid">
            <div class="grid-body text-gray">
            <div class="d-flex justify-content-between">
                <p>30%</p>
                <p>+06.2%</p>
            </div>
            <p class="text-black">Traffic</p>
            <div class="wrapper w-50 mt-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas height="8" id="stat-line_1" width="58" style="display: block; width: 58px; height: 8px;" class="chartjs-render-monitor"></canvas>
            </div>
            </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6 equel-grid">
        <div class="grid">
            <div class="grid-body text-gray">
            <div class="d-flex justify-content-between">
                <p>43%</p>
                <p>+15.7%</p>
            </div>
            <p class="text-black">Conversion</p>
            <div class="wrapper w-50 mt-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas height="8" id="stat-line_2" width="58" style="display: block; width: 58px; height: 8px;" class="chartjs-render-monitor"></canvas>
            </div>
            </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6 equel-grid">
        <div class="grid">
            <div class="grid-body text-gray">
            <div class="d-flex justify-content-between">
                <p>23%</p>
                <p>+02.7%</p>
            </div>
            <p class="text-black">Bounce Rate</p>
            <div class="wrapper w-50 mt-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas height="8" id="stat-line_3" width="58" style="display: block; width: 58px; height: 8px;" class="chartjs-render-monitor"></canvas>
            </div>
            </div>
        </div>
        </div>
        <div class="col-md-3 col-sm-6 col-6 equel-grid">
        <div class="grid">
            <div class="grid-body text-gray">
            <div class="d-flex justify-content-between">
                <p>75%</p>
                <p>- 53.34%</p>
            </div>
            <p class="text-black">Marketing</p>
            <div class="wrapper w-50 mt-4"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas height="8" id="stat-line_4" width="58" style="display: block; width: 58px; height: 8px;" class="chartjs-render-monitor"></canvas>
            </div>
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 equel-grid">
        <div class="grid">
            <div class="grid-body d-flex flex-column h-100">
            <div class="wrapper">
                <div class="d-flex justify-content-between">
                <div class="split-header">
                    <img class="img-ss mt-1 mb-1 mr-2" src="http://127.0.0.1:8000/admin/images/social-icons/instagram.svg" alt="instagram">
                    <p class="card-title">Followers Growth</p>
                </div>
                <div class="wrapper">
                    <button class="btn action-btn btn-xs component-flat pr-0" type="button"><i class="mdi mdi-access-point text-muted mdi-2x"></i></button>
                    <button class="btn action-btn btn-xs component-flat pr-0" type="button"><i class="mdi mdi-cloud-download-outline text-muted mdi-2x"></i></button>
                </div>
                </div>
                <div class="d-flex align-items-end pt-2 mb-4">
                <h4>16.2K</h4>
                <p class="ml-2 text-muted">New Followers</p>
                </div>
            </div>
            <div class="mt-auto"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas class="curved-mode chartjs-render-monitor" id="followers-bar-chart" height="129" width="176" style="display: block; width: 176px; height: 129px;"></canvas>
            </div>
            </div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 equel-grid">
        <div class="grid">
            <div class="grid-body" style="position: relative;">
            <p class="card-title">Campaign</p>
            <div id="radial-chart" style="min-height: 235px;"><div id="apexchartsa3aj8b2a" class="apexcharts-canvas apexchartsa3aj8b2a" style="width: 176px; height: 230px;"><svg id="SvgjsSvg1107" width="176" height="230" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG1109" class="apexcharts-inner apexcharts-graphical" transform="translate(0.5, 20)"><defs id="SvgjsDefs1108"><clipPath id="gridRectMaska3aj8b2a"><rect id="SvgjsRect1110" width="177" height="177" x="-1" y="-1" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect></clipPath><clipPath id="gridRectMarkerMaska3aj8b2a"><rect id="SvgjsRect1111" width="183" height="183" x="-4" y="-4" rx="0" ry="0" fill="#ffffff" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0"></rect></clipPath><linearGradient id="SvgjsLinearGradient1117" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1118" stop-opacity="1" stop-color="rgba(242,242,242,1)" offset="0"></stop><stop id="SvgjsStop1119" stop-opacity="1" stop-color="rgba(135,212,249,1)" offset="1"></stop><stop id="SvgjsStop1120" stop-opacity="1" stop-color="rgba(135,212,249,1)" offset="1"></stop></linearGradient><filter id="SvgjsFilter1123" filterUnits="userSpaceOnUse"><feFlood id="SvgjsFeFlood1124" flood-color="black" flood-opacity="0.02" result="SvgjsFeFlood1124Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1125" in="SvgjsFeFlood1124Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1125Out"></feComposite><feOffset id="SvgjsFeOffset1126" dx="0" dy="2" result="SvgjsFeOffset1126Out" in="SvgjsFeComposite1125Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1127" stdDeviation="4 " result="SvgjsFeGaussianBlur1127Out" in="SvgjsFeOffset1126Out"></feGaussianBlur><feMerge id="SvgjsFeMerge1128" result="SvgjsFeMerge1128Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1129" in="SvgjsFeGaussianBlur1127Out"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1130" in="[object Arguments]"></feMergeNode></feMerge><feBlend id="SvgjsFeBlend1131" in="SourceGraphic" in2="SvgjsFeMerge1128Out" mode="normal" result="SvgjsFeBlend1131Out"></feBlend></filter><linearGradient id="SvgjsLinearGradient1138" x1="0" y1="0" x2="0" y2="1"><stop id="SvgjsStop1139" stop-opacity="1" stop-color="rgba(105,111,251,1)" offset="0"></stop><stop id="SvgjsStop1140" stop-opacity="1" stop-color="rgba(135,212,249,1)" offset="1"></stop><stop id="SvgjsStop1141" stop-opacity="1" stop-color="rgba(135,212,249,1)" offset="1"></stop></linearGradient></defs><g id="SvgjsG1113" class="apexcharts-radialbar"><g id="SvgjsG1114"><g id="SvgjsG1115"><g id="apexcharts-track-0" class="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 87.5 23.49146341463414 A 64.00853658536586 64.00853658536586 0 1 1 87.38828408543792 23.491560905185693" fill="none" fill-opacity="1" stroke="rgba(242,242,242,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="6.697731707317073" stroke-dasharray="0" class="apexcharts-radialbar-area" filter="url(#SvgjsFilter1123)" data:pathOrig="M 87.5 23.49146341463414 A 64.00853658536586 64.00853658536586 0 1 1 87.38828408543792 23.491560905185693"></path></g></g><g id="SvgjsG1132"><g id="apexcharts-series-0" class="apexcharts-series apexcharts-radial-series Progress" rel="1"><path id="apexcharts-radialArc-0" d="M 87.5 23.49146341463414 A 64.00853658536586 64.00853658536586 0 1 1 31.516872477286014 118.531954314475" fill="none" fill-opacity="0.85" stroke="url(#SvgjsLinearGradient1138)" stroke-opacity="1" stroke-linecap="round" stroke-width="6.904878048780487" stroke-dasharray="0" class="apexcharts-radialbar-area" data:angle="241" data:value="67" data:pathOrig="M 87.5 23.49146341463414 A 64.00853658536586 64.00853658536586 0 1 1 31.516872477286014 118.531954314475"></path></g><circle id="SvgjsCircle1133" r="60.65967073170732" cx="87.5" cy="87.5" class="apexcharts-radialbar-hollow" fill="rgba(255,255,255,0.1)"></circle><g id="SvgjsG1134" class="apexcharts-datalabels-group" transform="translate(0, 0)" style="opacity: 1;"><text id="SvgjsText1135" font-family="Helvetica, Arial, sans-serif" x="87.5" y="77.5" text-anchor="middle" dominate-baseline="central" font-size="13px" fill="#adb5bd" class="apexcharts-datalabel-label" style="font-family: Helvetica, Arial, sans-serif;">Progress</text><text id="SvgjsText1136" font-family="Helvetica, Arial, sans-serif" x="87.5" y="108.5" text-anchor="middle" dominate-baseline="central" font-size="20px" fill="#000000" class="apexcharts-datalabel-value" style="font-family: Helvetica, Arial, sans-serif;">67%</text></g></g></g></g><line id="SvgjsLine1143" x1="0" y1="0" x2="175" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1144" x1="0" y1="0" x2="175" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g></svg><div class="apexcharts-legend"></div></div></div>
            <h4 class="text-center">$23,350.00</h4>
            <p class="text-center text-muted">Used balance this billing cycle</p>
            <div class="resize-triggers"><div class="expand-trigger"><div style="width: 227px; height: 374px;"></div></div><div class="contract-trigger"></div></div></div>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 equel-grid">
        <div class="grid table-responsive">
            <table class="table table-stretched">
            <thead>
                <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <p class="mb-n1 font-weight-medium">AAPL</p>
                    <small class="text-gray">Apple Inc.</small>
                </td>
                <td class="font-weight-medium">198.18</td>
                <td class="text-danger font-weight-medium">
                    <div class="badge badge-success">-1.39%</div>
                </td>
                </tr>
                <tr>
                <td>
                    <p class="mb-n1 font-weight-medium">NKE</p>
                    <small class="text-gray">Nike,Inc.</small>
                </td>
                <td class="font-weight-medium">03.95</td>
                <td class="text-danger font-weight-medium">
                    <div class="badge badge-danger">-1.17%</div>
                </td>
                </tr>
                <tr>
                <td>
                    <p class="mb-n1 font-weight-medium">NSEI</p>
                    <small class="text-gray">Nifty 50</small>
                </td>
                <td class="font-weight-medium">11,278</td>
                <td class="text-danger font-weight-medium">
                    <div class="badge badge-success">-0.24%</div>
                </td>
                </tr>
                <tr>
                <td>
                    <p class="mb-n1 font-weight-medium">BA</p>
                    <small class="text-gray">The Boeing Company</small>
                </td>
                <td class="font-weight-medium">354.67</td>
                <td class="text-success font-weight-medium">
                    <div class="badge badge-success">+0.15%</div>
                </td>
                </tr>
                <tr>
                <td>
                    <p class="mb-n1 font-weight-medium">SBUX</p>
                    <small class="text-gray">Starbucks Corporation</small>
                </td>
                <td class="font-weight-medium">08.42</td>
                <td class="text-success font-weight-medium">
                    <div class="badge badge-success">+0.67%</div>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 equel-grid">
        <div class="grid">
            <div class="grid-body">
            <div class="split-header">
                <p class="card-title">Available Balance</p>
                <span class="btn action-btn btn-xs component-flat" data-toggle="tooltip" data-placement="left" title="Available balance since the last week">
                <i class="mdi mdi-information-outline text-muted mdi-2x"></i>
                </span>
            </div>
            <div class="d-flex align-items-end mt-2">
                <h3>26.00453100</h3>
                <p class="ml-1 font-weight-bold">BTC</p>
            </div>
            <div class="d-flex mt-2">
                <div class="wrapper d-flex pr-4">
                <small class="text-success font-weight-medium mr-2">USD</small>
                <small class="text-gray">$103,342.50</small>
                </div>
                <div class="wrapper d-flex">
                <small class="text-primary font-weight-medium mr-2">EUR</small>
                <small class="text-gray">$91,105.00</small>
                </div>
            </div>
            <div class="d-flex flex-row mt-4 mb-4">
                <button class="btn btn-outline-light text-gray component-flat w-50 mr-2" type="button">SEND</button>
                <button class="btn btn-primary w-50 ml-2" type="button">RECEIVE</button>
            </div>
            <div class="d-flex mt-5 mb-3">
                <small class="mb-0 text-primary">Recent Transaction (3)</small>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2">
                <p class="text-black">Received Bitcoin</p>
                <p class="text-gray">+0.00005462 BTC</p>
            </div>
            <div class="d-flex justify-content-between border-bottom py-2">
                <p class="text-black">Sent Bitcoin</p>
                <p class="text-gray">-0.00001446 BTC</p>
            </div>
            <div class="d-flex justify-content-between pt-2">
                <p class="text-black">Sent Bitcoin</p>
                <p class="text-gray">-0.00003573 BTC</p>
            </div>
            </div>
        </div>
        </div>
        <div class="col-lg-7 col-md-12 equel-grid">
        <div class="grid widget-revenue-card">
            <div class="grid-body d-flex flex-column h-100">
            <div class="split-header">
                <p class="card-title">Server Load</p>
                <div class="content-wrapper v-centered">
                <small class="text-muted">2h ago</small>
                <span class="btn action-btn btn-refresh btn-xs component-flat">
                    <i class="mdi mdi-autorenew text-muted mdi-2x"></i>
                </span>
                </div>
            </div>
            <div class="mt-auto"><div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
                <canvas id="cpu-performance" height="95" width="358" style="display: block; width: 358px; height: 95px;" class="chartjs-render-monitor"></canvas>
                <h3 class="font-weight-medium mt-4">69.05%</h3>
                <p class="text-gray">Storage is getting full</p>
                <div class="w-50">
                <div class="d-flex justify-content-between text-muted mt-3">
                    <small>Usage</small> <small>35.62 GB / 2TB</small>
                </div>
                <div class="progress progress-slim mt-2">
                    <div class="progress-bar bg-primary" role="progressbar" style="width: 68%" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="col-md-8 equel-grid">
        <div class="grid">
            <div class="grid-body py-3">
            <p class="card-title ml-n1">Order History</p>
            </div>
            <div class="table-responsive">
            <table class="table table-hover table-sm">
                <thead>
                <tr class="solid-header">
                    <th colspan="2" class="pl-4">Customer</th>
                    <th>Order No</th>
                    <th>Purchased On</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="pr-0 pl-4">
                    <img class="profile-img img-sm" src="http://127.0.0.1:8000/admin/images/profile/male/image_4.png" alt="profile image">
                    </td>
                    <td class="pl-md-0">
                    <small class="text-black font-weight-medium d-block">Barbara Curtis</small>
                    <span class="text-gray">
                        <span class="status-indicator rounded-indicator small bg-primary"></span>Account Deactivated </span>
                    </td>
                    <td>
                    <small>8523537435</small>
                    </td>
                    <td> Just Now </td>
                </tr>
                <tr>
                    <td class="pr-0 pl-4">
                    <img class="profile-img img-sm" src="http://127.0.0.1:8000/admin/images/profile/male/image_3.png" alt="profile image">
                    </td>
                    <td class="pl-md-0">
                    <small class="text-black font-weight-medium d-block">Charlie Hawkins</small>
                    <span class="text-gray">
                        <span class="status-indicator rounded-indicator small bg-success"></span>Email Verified </span>
                    </td>
                    <td>
                    <small>9537537436</small>
                    </td>
                    <td> Mar 04, 2018 11:37am </td>
                </tr>
                <tr>
                    <td class="pr-0 pl-4">
                    <img class="profile-img img-sm" src="http://127.0.0.1:8000/admin/images/profile/female/image_2.png" alt="profile image">
                    </td>
                    <td class="pl-md-0">
                    <small class="text-black font-weight-medium d-block">Nina Bates</small>
                    <span class="text-gray">
                        <span class="status-indicator rounded-indicator small bg-warning"></span>Payment On Hold </span>
                    </td>
                    <td>
                    <small>7533567437</small>
                    </td>
                    <td> Mar 13, 2018 9:41am </td>
                </tr>
                <tr>
                    <td class="pr-0 pl-4">
                    <img class="profile-img img-sm" src="http://127.0.0.1:8000/admin/images/profile/male/image_10.png" alt="profile image">
                    </td>
                    <td class="pl-md-0">
                    <small class="text-black font-weight-medium d-block">Hester Richards</small>
                    <span class="text-gray">
                        <span class="status-indicator rounded-indicator small bg-success"></span>Email Verified </span>
                    </td>
                    <td>
                    <small>5673467743</small>
                    </td>
                    <td> Feb 21, 2018 8:34am </td>
                </tr>
                </tbody>
            </table>
            </div>
            <a class="border-top px-3 py-2 d-block text-gray" href="#">
            <small class="font-weight-medium"><i class="mdi mdi-chevron-down mr-2"></i>View All Order History</small>
            </a>
        </div>
        </div>
        <div class="col-md-4 equel-grid">
        <div class="grid">
            <div class="grid-body">
            <div class="split-header">
                <p class="card-title">Activity Log</p>
                <div class="btn-group">
                <button type="button" class="btn btn-trasnparent action-btn btn-xs component-flat pr-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="mdi mdi-dots-vertical"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Expand View</a>
                    <a class="dropdown-item" href="#">Edit</a>
                </div>
                </div>
            </div>
            <div class="vertical-timeline-wrapper">
                <div class="timeline-vertical dashboard-timeline">
                <div class="activity-log">
                    <p class="log-name">Agnes Holt</p>
                    <div class="log-details">Analytics dashboard has been created<span class="text-primary ml-1">#Slack</span></div>
                    <small class="log-time">8 mins Ago</small>
                </div>
                <div class="activity-log">
                    <p class="log-name">Ronald Edwards</p>
                    <div class="log-details">Report has been updated <div class="grouped-images mt-2">
                        <img class="img-sm" src="http://127.0.0.1:8000/admin/images/profile/male/image_4.png" alt="Profile Image" data-toggle="tooltip" title="Gerald Pierce">
                        <img class="img-sm" src="http://127.0.0.1:8000/admin/images/profile/male/image_5.png" alt="Profile Image" data-toggle="tooltip" title="Edward Wilson">
                        <img class="img-sm" src="http://127.0.0.1:8000/admin/images/profile/female/image_6.png" alt="Profile Image" data-toggle="tooltip" title="Billy Williams">
                        <img class="img-sm" src="http://127.0.0.1:8000/admin/images/profile/male/image_6.png" alt="Profile Image" data-toggle="tooltip" title="Lelia Hampton">
                        <span class="plus-text img-sm">+3</span>
                    </div>
                    </div>
                    <small class="log-time">3 Hours Ago</small>
                </div>
                <div class="activity-log">
                    <p class="log-name">Charlie Newton</p>
                    <div class="log-details"> Approved your request <div class="wrapper mt-2">
                        <button type="button" class="btn btn-xs btn-primary">Approve</button>
                        <button type="button" class="btn btn-xs btn-inverse-primary">Reject</button>
                    </div>
                    </div>
                    <small class="log-time">2 Hours Ago</small>
                </div>
                <div class="activity-log">
                    <p class="log-name">Gussie Page</p>
                    <div class="log-details">Added new task: Slack home page</div>
                    <small class="log-time">4 Hours Ago</small>
                </div>
                <div class="activity-log">
                    <p class="log-name">Ina Mendoza</p>
                    <div class="log-details">Added new images</div>
                    <small class="log-time">8 Hours Ago</small>
                </div>
                </div>
            </div>
            </div>
            <a class="border-top px-3 py-2 d-block text-gray" href="#">
            <small class="font-weight-medium"><i class="mdi mdi-chevron-down mr-2"></i> View All </small>
            </a>
        </div>
        </div>
    </div>
    </div>
</div>
@endsection
