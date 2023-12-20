import { createFeatureSelector } from '@ngrx/store';
import { Profile } from '../../../assets/models/profile.model';

export const selectProfileFeature = createFeatureSelector<Profile>('Profile');
