import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Challenge = {
   __typename?: 'Challenge',
  id: Scalars['ID'],
  name: Scalars['String'],
  startDate: Scalars['String'],
  endDate: Scalars['String'],
  totalPrizeMoney: Scalars['Int'],
  entryFee: Scalars['Int'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createChallenge: Challenge,
};


export type MutationCreateChallengeArgs = {
  newChallenge: NewChallenge
};

export type NewChallenge = {
  name: Scalars['String'],
  startDate: Scalars['String'],
  endDate: Scalars['String'],
  entryFee: Scalars['Int'],
};

export type Query = {
   __typename?: 'Query',
  authenticatedUser: User,
};

export type User = {
   __typename?: 'User',
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  displayName: Scalars['String'],
  challenges?: Maybe<Array<UserChallenge>>,
  friends: Array<User>,
  profilePicture: Scalars['String'],
  options: UserOptions,
};

export type UserChallenge = {
   __typename?: 'UserChallenge',
  user: User,
  challenge: Challenge,
  status: UserChallengeStatus,
};

export enum UserChallengeStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Withdrawn = 'WITHDRAWN'
}

export type UserOptions = {
   __typename?: 'UserOptions',
  shouldRecieveSMSAlerts: Scalars['Boolean'],
  shouldRecieveEmailAlerts: Scalars['Boolean'],
  shouldRevieveWeighInReminders: Scalars['Boolean'],
  shouldRevieveWeeklyReports: Scalars['Boolean'],
  hasDownloadedPWA: Scalars['Boolean'],
  shouldSendPWAAlert: Scalars['Boolean'],
};

export type WeeklyWeighIn = {
   __typename?: 'WeeklyWeighIn',
  date: Scalars['String'],
  challenge: Challenge,
  weighIns: Array<WeighIn>,
};

export type WeighIn = {
   __typename?: 'WeighIn',
  weeklyWeighIn: WeeklyWeighIn,
  user: User,
  weight: Scalars['Int'],
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  User: ResolverTypeWrapper<User>,
  String: ResolverTypeWrapper<Scalars['String']>,
  UserChallenge: ResolverTypeWrapper<UserChallenge>,
  Challenge: ResolverTypeWrapper<Challenge>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  UserChallengeStatus: UserChallengeStatus,
  UserOptions: ResolverTypeWrapper<UserOptions>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Mutation: ResolverTypeWrapper<{}>,
  NewChallenge: NewChallenge,
  WeeklyWeighIn: ResolverTypeWrapper<WeeklyWeighIn>,
  WeighIn: ResolverTypeWrapper<WeighIn>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  String: Scalars['String'],
  UserChallenge: UserChallenge,
  Challenge: Challenge,
  ID: Scalars['ID'],
  Int: Scalars['Int'],
  UserChallengeStatus: UserChallengeStatus,
  UserOptions: UserOptions,
  Boolean: Scalars['Boolean'],
  Mutation: {},
  NewChallenge: NewChallenge,
  WeeklyWeighIn: WeeklyWeighIn,
  WeighIn: WeighIn,
};

export type ChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Challenge'] = ResolversParentTypes['Challenge']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  totalPrizeMoney?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  entryFee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChallenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType, RequireFields<MutationCreateChallengeArgs, 'newChallenge'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authenticatedUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  challenges?: Resolver<Maybe<Array<ResolversTypes['UserChallenge']>>, ParentType, ContextType>,
  friends?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  profilePicture?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  options?: Resolver<ResolversTypes['UserOptions'], ParentType, ContextType>,
};

export type UserChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserChallenge'] = ResolversParentTypes['UserChallenge']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['UserChallengeStatus'], ParentType, ContextType>,
};

export type UserOptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserOptions'] = ResolversParentTypes['UserOptions']> = {
  shouldRecieveSMSAlerts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  shouldRecieveEmailAlerts?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  shouldRevieveWeighInReminders?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  shouldRevieveWeeklyReports?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  hasDownloadedPWA?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  shouldSendPWAAlert?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type WeeklyWeighInResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeeklyWeighIn'] = ResolversParentTypes['WeeklyWeighIn']> = {
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>,
  weighIns?: Resolver<Array<ResolversTypes['WeighIn']>, ParentType, ContextType>,
};

export type WeighInResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeighIn'] = ResolversParentTypes['WeighIn']> = {
  weeklyWeighIn?: Resolver<ResolversTypes['WeeklyWeighIn'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Challenge?: ChallengeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserChallenge?: UserChallengeResolvers<ContextType>,
  UserOptions?: UserOptionsResolvers<ContextType>,
  WeeklyWeighIn?: WeeklyWeighInResolvers<ContextType>,
  WeighIn?: WeighInResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
