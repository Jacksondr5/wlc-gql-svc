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
  weighInDay: Scalars['String'],
  totalPrizeMoney: Scalars['Int'],
  entryFee: Scalars['Int'],
  prizes: Array<Prize>,
  participants: Array<UserChallenge>,
  weighIns: Array<WeighIn>,
  status: ChallengeStatus,
};

export enum ChallengeStatus {
  Upcomming = 'UPCOMMING',
  Active = 'ACTIVE',
  Ended = 'ENDED'
}

export type Mutation = {
   __typename?: 'Mutation',
  createChallenge: Challenge,
  deleteChallenge?: Maybe<Scalars['Boolean']>,
};


export type MutationCreateChallengeArgs = {
  newChallenge: NewChallenge
};


export type MutationDeleteChallengeArgs = {
  challengeId: Scalars['ID']
};

export type NewChallenge = {
  name: Scalars['String'],
  startDate: Scalars['String'],
  endDate: Scalars['String'],
  entryFee: Scalars['Int'],
};

export type PercentPrize = Prize & {
   __typename?: 'PercentPrize',
  name: Scalars['String'],
  amount: Scalars['String'],
  percentage: Scalars['Int'],
};

export type Prize = {
  name: Scalars['String'],
  amount: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  authenticatedUser: User,
  getChallenge: Challenge,
};


export type QueryGetChallengeArgs = {
  challengeId: Scalars['ID']
};

export type RankedPrize = Prize & {
   __typename?: 'RankedPrize',
  name: Scalars['String'],
  amount: Scalars['String'],
  rank: Scalars['Int'],
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  displayName: Scalars['String'],
  challenges: Array<UserChallenge>,
};

export type UserChallenge = {
   __typename?: 'UserChallenge',
  id: Scalars['ID'],
  user: User,
  challenge: Challenge,
  status: UserChallengeStatus,
  weighIns: Array<WeighIn>,
};

export enum UserChallengeStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Withdrawn = 'WITHDRAWN',
  Admin = 'ADMIN'
}

export type WeighIn = {
   __typename?: 'WeighIn',
  user: User,
  challenge: Challenge,
  weight: Scalars['Int'],
  percentLost: Scalars['Int'],
  weighInDateTime: Scalars['String'],
  week: Scalars['Int'],
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
  ID: ResolverTypeWrapper<Scalars['ID']>,
  String: ResolverTypeWrapper<Scalars['String']>,
  UserChallenge: ResolverTypeWrapper<UserChallenge>,
  Challenge: ResolverTypeWrapper<Challenge>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Prize: ResolverTypeWrapper<Prize>,
  WeighIn: ResolverTypeWrapper<WeighIn>,
  ChallengeStatus: ChallengeStatus,
  UserChallengeStatus: UserChallengeStatus,
  Mutation: ResolverTypeWrapper<{}>,
  NewChallenge: NewChallenge,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  RankedPrize: ResolverTypeWrapper<RankedPrize>,
  PercentPrize: ResolverTypeWrapper<PercentPrize>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  User: User,
  ID: Scalars['ID'],
  String: Scalars['String'],
  UserChallenge: UserChallenge,
  Challenge: Challenge,
  Int: Scalars['Int'],
  Prize: Prize,
  WeighIn: WeighIn,
  ChallengeStatus: ChallengeStatus,
  UserChallengeStatus: UserChallengeStatus,
  Mutation: {},
  NewChallenge: NewChallenge,
  Boolean: Scalars['Boolean'],
  RankedPrize: RankedPrize,
  PercentPrize: PercentPrize,
};

export type ChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Challenge'] = ResolversParentTypes['Challenge']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  weighInDay?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  totalPrizeMoney?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  entryFee?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  prizes?: Resolver<Array<ResolversTypes['Prize']>, ParentType, ContextType>,
  participants?: Resolver<Array<ResolversTypes['UserChallenge']>, ParentType, ContextType>,
  weighIns?: Resolver<Array<ResolversTypes['WeighIn']>, ParentType, ContextType>,
  status?: Resolver<ResolversTypes['ChallengeStatus'], ParentType, ContextType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createChallenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType, RequireFields<MutationCreateChallengeArgs, 'newChallenge'>>,
  deleteChallenge?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteChallengeArgs, 'challengeId'>>,
};

export type PercentPrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PercentPrize'] = ResolversParentTypes['PercentPrize']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  percentage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type PrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Prize'] = ResolversParentTypes['Prize']> = {
  __resolveType: TypeResolveFn<'RankedPrize' | 'PercentPrize', ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  authenticatedUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  getChallenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType, RequireFields<QueryGetChallengeArgs, 'challengeId'>>,
};

export type RankedPrizeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RankedPrize'] = ResolversParentTypes['RankedPrize']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  amount?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  challenges?: Resolver<Array<ResolversTypes['UserChallenge']>, ParentType, ContextType>,
};

export type UserChallengeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserChallenge'] = ResolversParentTypes['UserChallenge']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['UserChallengeStatus'], ParentType, ContextType>,
  weighIns?: Resolver<Array<ResolversTypes['WeighIn']>, ParentType, ContextType>,
};

export type WeighInResolvers<ContextType = any, ParentType extends ResolversParentTypes['WeighIn'] = ResolversParentTypes['WeighIn']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  challenge?: Resolver<ResolversTypes['Challenge'], ParentType, ContextType>,
  weight?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  percentLost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  weighInDateTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Challenge?: ChallengeResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  PercentPrize?: PercentPrizeResolvers<ContextType>,
  Prize?: PrizeResolvers,
  Query?: QueryResolvers<ContextType>,
  RankedPrize?: RankedPrizeResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
  UserChallenge?: UserChallengeResolvers<ContextType>,
  WeighIn?: WeighInResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
