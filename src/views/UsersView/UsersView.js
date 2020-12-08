import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import * as links from '../../components/RoutesManager/routelinks';
const styles = theme => ({
    table: {
        minWidth: 600,
    }
})

class UsersView extends Component {
    componentDidMount() {
        this.props.onFetchUsers(1, 25);
    }

    getRows() {
        console.log(this.props);
        const { users } = this.props;
        if (users) {
            return users.map(user => {
                const firstname = user.firstname ? user.firstname : 'N/A';
                const lastname = user.lastname ? user.lastname : 'N/A';
                const login = user.login;
                const email = user.email;
                return (
                    <TableRow key={user.userId}>
                        <TableCell>{lastname}</TableCell>
                        <TableCell>{firstname}</TableCell>
                        <TableCell>{login}</TableCell>
                        <TableCell>{email}</TableCell>
                        <TableCell></TableCell>
                    </TableRow>

                )
            });
        }

    }

    newUser() {
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h2 className='title-border'>Gestion des utilisateurs</h2>
                <div>
                    <Link to={links.NEW_USER.layout + links.NEW_USER.path}>
                        <Button color="secondary" variant="contained" style={{ marginBottom: 25, marginTop: 15 }}>Nouvel utilisateur</Button>
                    </Link>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nom</TableCell>
                                    <TableCell>Prénom</TableCell>
                                    <TableCell>Identifiant</TableCell>
                                    <TableCell>e-mail</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.getRows()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        pageCount: state.users.pageCount,
        users: state.users.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: (page, perPage) => dispatch(actions.fetchUsers(page, perPage))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UsersView));
