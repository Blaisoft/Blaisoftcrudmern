import React, { Component } from 'react'

export default class Headerpastor extends Component {
    render() {
        return (
            <div>
         <nav className="navbar navbar-default navbar-static-top m-b-0">
  <div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i className="ti-menu" /></a>
    <div className="top-left-part"><a className="logo" href="index.html"><b><img src="../plugins/images/eliteadmin-logo.png" alt="home" /></b><span className="hidden-xs"><strong>elite</strong>university</span></a></div>
    <ul className="nav navbar-top-links navbar-left hidden-xs">
      <li><a href="javascript:void(0)" className="open-close hidden-xs waves-effect waves-light"><i className="icon-arrow-left-circle ti-menu" /></a></li>
      <li>
        <form role="search" className="app-search hidden-xs">
          <input type="text" placeholder="Search..." className="form-control" /> <a href><i className="fa fa-search" /></a> </form>
      </li>
    </ul>
    <ul className="nav navbar-top-links navbar-right pull-right">
      <li className="dropdown"> <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i className="icon-envelope" />
          <div className="notify"><span className="heartbit" /><span className="point" /></div>
        </a>
        <ul className="dropdown-menu mailbox animated bounceInDown">
          <li>
            <div className="drop-title">You have 4 new messages</div>
          </li>
          <li>
            <div className="message-center">
              <a href="#">
                <div className="user-img"> <img src="../plugins/images/users/pawandeep.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                <div className="mail-contnet">
                  <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
              </a>
              <a href="#">
                <div className="user-img"> <img src="../plugins/images/users/sonu.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                <div className="mail-contnet">
                  <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
              </a>
              <a href="#">
                <div className="user-img"> <img src="../plugins/images/users/arijit.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                <div className="mail-contnet">
                  <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
              </a>
              <a href="#">
                <div className="user-img"> <img src="../plugins/images/users/pawandeep.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                <div className="mail-contnet">
                  <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
              </a>
            </div>
          </li>
          <li>
            <a className="text-center" href="javascript:void(0);"> <strong>See all notifications</strong> <i className="fa fa-angle-right" /> </a>
          </li>
        </ul>
        {/* /.dropdown-messages */}
      </li>
      {/* /.dropdown */}
      <li className="dropdown"> <a className="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="#"><i className="icon-note" />
          <div className="notify"><span className="heartbit" /><span className="point" /></div>
        </a>
        <ul className="dropdown-menu dropdown-tasks animated slideInUp">
          <li>
            <a href="#">
              <div>
                <p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}> <span className="sr-only">40% Complete (success)</span> </div>
                </div>
              </div>
            </a>
          </li>
          <li className="divider" />
          <li>
            <a href="#">
              <div>
                <p> <strong>Task 2</strong> <span className="pull-right text-muted">20% Complete</span> </p>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}}> <span className="sr-only">20% Complete</span> </div>
                </div>
              </div>
            </a>
          </li>
          <li className="divider" />
          <li>
            <a href="#">
              <div>
                <p> <strong>Task 3</strong> <span className="pull-right text-muted">60% Complete</span> </p>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}> <span className="sr-only">60% Complete (warning)</span> </div>
                </div>
              </div>
            </a>
          </li>
          <li className="divider" />
          <li>
            <a href="#">
              <div>
                <p> <strong>Task 4</strong> <span className="pull-right text-muted">80% Complete</span> </p>
                <div className="progress progress-striped active">
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}> <span className="sr-only">80% Complete (danger)</span> </div>
                </div>
              </div>
            </a>
          </li>
          <li className="divider" />
          <li>
            <a className="text-center" href="#"> <strong>See All Tasks</strong> <i className="fa fa-angle-right" /> </a>
          </li>
        </ul>
        {/* /.dropdown-tasks */}
      </li>
      {/* /.dropdown */}
      <li className="dropdown">
        <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"> <img src="../plugins/images/users/1.jpg" alt="user-img" width={36} className="img-circle" /><b className="hidden-xs">Prof. Steave</b> </a>
        <ul className="dropdown-menu dropdown-user animated flipInY">
          <li><a href="javascript:void(0)"><i className="ti-user" />  My Profile</a></li>
          <li><a href="javascript:void(0)"><i className="ti-email" />  Inbox</a></li>
          <li><a href="javascript:void(0)"><i className="ti-settings" />  Account Setting</a></li>
          <li><a href="login.html"><i className="fa fa-power-off" />  Logout</a></li>
        </ul>
        {/* /.dropdown-user */}
      </li>
      <li className="right-side-toggle"> <a className="waves-effect waves-light" href="javascript:void(0)"><i className="ti-settings" /></a></li>
      {/* /.dropdown */}
    </ul>
  </div>
  {/* /.navbar-header */}
  {/* /.navbar-top-links */}
  {/* /.navbar-static-side */}
</nav>

            </div>
        )
    }
}
