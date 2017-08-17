import * as Sequelize from 'sequelize';
import Model from './Model';

export default class UsersModel extends Model {
	public constructor(connection: any) {
		super({
			UserID: {
				type: Sequelize.TEXT,
				field: 'UserID',
				allowNull: false
			},
			UserName: {
				type: Sequelize.TEXT,
				field: 'UserName',
				allowNull: false
			},
			ServerID: {
				type: Sequelize.TEXT,
				field: 'ServerID',
				allowNull: false
			},
			SvrJoinDate: {
				type: Sequelize.DATE,
				field: 'ServerJoinDate',
				allowNull: true
			},
			SvrPartDate: {
				type: Sequelize.DATE,
				field: 'ServerPartDate',
				allowNull: true
			}
		}, 'Users', connection);
	}
}
