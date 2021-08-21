import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
//import BugReport from "@material-ui/icons/BugReport";
//import Code from "@material-ui/icons/Code";
//import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
//import Tasks from "components/Tasks/Tasks.js";
//import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";
//import Button from "@material-ui/core/Button";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
//ßimport Slide from "@material-ui/core/Slide";
//import Devices from 'components/'

//import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });
  const handleClickOpen = () => {
    console.log("open");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("close");
    setOpen(false);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>離線設備</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>台</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>重要指標2</p>
              <h3 className={classes.cardTitle}>122</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>重要指標3</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>重要指標4</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <Chip
            label="XXX-社區名稱"
            className={classes.chipCategory}
            color="secondary"
            onClick={handleClickOpen}
          />
          <Chip
            label="XXX-社區名稱ＸＸＸ"
            className={classes.chipCategory}
            color="secondary"
            onClick={handleClickOpen}
          />
          <Chip
            label="XXX-社區名稱003"
            className={classes.chip}
            color="secondary"
            onClick={handleClickOpen}
          />
          <Chip
            label="XXX-社區名稱004"
            className={classes.chipCategory}
            color="primary"
            onClick={handleClickOpen}
          />
          <Chip
            label="XXX-社區名稱005"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="XXX-社區名稱006"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
          <Chip
            label="Basic Chip"
            className={classes.chipCategory}
            color="primary"
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>設備事件紀錄</h4>
              <p className={classes.cardCategoryWhite}>
                使用說明ＸＸＸＸＸＸＸＸＸＸＸＸ
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["時間", "主機", "事件"]}
                tableData={[
                  ["2021/08/15 12:21:12", "AA社區", "系統離線"],
                  ["2021/08/15 13:21:12", "BB社區", "溫度過高"],
                  ["2021/08/15 14:21:12", "CC社區", "網路流量達70%以上"],
                  ["2021/08/15 15:21:12", "AA社區", "溫度過高"],
                  ["2021/08/15 16:21:12", "DD社區", "網路流量達70%以上"],
                  ["2021/08/15 17:21:12", "CC社區", "系統離線"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              設備詳細資料
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem>
            <ListItemText primary="" secondary="" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="連線狀況" secondary="OK" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="說明欄位1" secondary="補充說明1" />
          </ListItem>
          <Divider />
        </List>
      </Dialog>
    </div>
  );
}
