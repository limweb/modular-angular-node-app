import controller from './user-signin.controller';

const UserSigninComponent = {
	controller,
    template: `
        <form class="mt-15 form-horizontal" ng-submit="$ctrl.signin()">
            <div class="form-group">
    			<div class="input-group col-sm-offset-3 col-sm-6">
    				<span class="input-group-addon"> <span class="glyphicon glyphicon-user"></span> </span>
    				<input type="text" class="form-control" placeholder="User name" autofocus ng-model="$ctrl.data.credentials.name">
    			</div>
            </div>
            <div class="form-group">
    			<div class="input-group col-sm-offset-3 col-sm-6">
    				<span class="input-group-addon"> <span class="glyphicon glyphicon-lock"></span> </span>
    				<input type="password" class="form-control" placeholder="User password" ng-model="$ctrl.data.credentials.password">
    			</div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-3">
                    <button type="submit" class="btn btn-primary"> Sign in </button>
                </div>
            </div>
            <div class="form-group has-error">
                <div class="col-sm-offset-3">
                    <span class="help-block" ng-show="$ctrl.data.message.length > 0"> {{ $ctrl.data.message }} </span>
                </div>
            </div>
		</form>
    `
};

export default UserSigninComponent;
