import { Injectable } from "@angular/core";
import {Effect, ofType, Actions} from '@ngrx/effects';
import {Store, select} from '@ngrx/store';
import {of} from 'rxjs';
import {switchMap, map, withLatestFrom} from 'rxjs/operators';

import {IAppState} from '../state/app.state';

import {
    GetUsersSuccess,
    GetUserSuccess,
    GetUsers,
    GetUser,
    EUserActions
} from '../actions/user.actions'

import { UserService } from '../../services/user.service'