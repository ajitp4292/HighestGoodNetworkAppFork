import { getAllPermissionKeys } from '../components/PermissionsManagement/PermissionsConst.js';

export const allTeamsMock = {
  fetching: false,
  fetched: true,
  status: '200',
  allTeams: [
    {
      isActive: true,
      modifiedDatetime: '2020-09-01T18:26:11.253Z',
      _id: '5f4361b087ec4e0430369f00',
      teamName: '01 team',
      createdDatetime: '2020-09-01T18:26:11.253Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-09-04T03:01:50.541Z',
      _id: '5f51ae1effb06c76d02a0cc8',
      teamName: '1A new team',
      createdDatetime: '2020-09-04T03:01:50.541Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-09-12T12:52:48.620Z',
      _id: '5f3eaffec1baee0ef4784c8e',
      teamName: 'Dev jk team 1aab',
      createdDatetime: '2020-09-12T12:52:48.620Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-08-20T11:46:04.770Z',
      _id: '5a849147592ca46b43db272c',
      createdDatetime: '2020-08-20T11:46:04.770Z',
      teamName: 'Dev ops dev team',
    },
    {
      isActive: true,
      modifiedDatetime: '2018-05-30T01:29:36.178Z',
      _id: '5a380b59fdaef527980efc84',
      createdDatetime: '2018-05-30T01:29:36.178Z',
      teamName: 'Earth Science Software team',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2017-12-18T18:40:36.460Z',
      _id: '5a380ba4fdaef527980efc88',
      createdDatetime: '2017-12-18T18:40:36.460Z',
      teamName: 'Earth Science UAT team',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-01-14T23:49:38.781Z',
      _id: '5e1e5392649870060f1dd69c',
      teamName: 'Earth Science UAT team',
      createdDatetime: '2020-01-14T23:49:38.781Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-01-14T23:50:04.703Z',
      _id: '5e1e53ac649870060f1dd69d',
      teamName: 'Earth Science UAT team',
      createdDatetime: '2020-01-14T23:50:04.703Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2017-12-18T18:39:58.930Z',
      _id: '5a380b7efdaef527980efc87',
      createdDatetime: '2017-12-18T18:39:58.930Z',
      teamName: 'Earth Science business team',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2017-12-18T18:39:39.609Z',
      _id: '5a380b6bfdaef527980efc85',
      createdDatetime: '2017-12-18T18:39:39.609Z',
      teamName: 'Earth Science business team',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-09-13T16:23:49.828Z',
      _id: '5b9a8f152276fc002ee83a21',
      teamName: 'Earthbag Engineering Team',
      createdDatetime: '2018-09-13T16:23:49.828Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-04-03T17:24:37.261Z',
      _id: '5ac3b8d51a3f62002a37c023',
      teamName: 'HGN Software Cloud Deployment',
      createdDatetime: '2018-04-03T17:24:37.261Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-10-23T00:45:07.574Z',
      _id: '5ab48bf5156383287710bdea',
      teamName: 'HGN Software Development Team',
    },
    {
      isActive: true,
      modifiedDatetime: '2018-04-04T17:59:18.717Z',
      _id: '5ac512761a3f62002a37c06e',
      teamName: 'HGN Software Reports Team',
      createdDatetime: '2018-04-04T17:59:18.717Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-10-23T00:45:07.574Z',
      _id: '5ab48b7c156383287710bde7',
      teamName: 'HGN Software Testing Team',
    },
    {
      isActive: true,
      modifiedDatetime: '2020-09-25T16:36:23.033Z',
      _id: '5f6e1c877644e730f40939f9',
      teamName: "Jerry's Test Team",
      createdDatetime: '2020-09-25T16:36:23.033Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-09-13T16:32:44.600Z',
      _id: '5b9a912c2276fc002ee83a23',
      teamName: 'Management Test Team',
      createdDatetime: '2018-09-13T16:32:44.600Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-09-27T19:07:26.425Z',
      _id: '5b107439c758bd002ef13a74',
      teamName: 'Marketing Team',
      createdDatetime: '2018-09-27T19:07:26.425Z',
      __v: 0,
    },
    {
      isActive: false,
      modifiedDatetime: '2020-09-13T01:43:16.775Z',
      _id: '5f5cc4e77130111edcd16293',
      teamName: 'My team test 1',
      createdDatetime: '2020-09-13T01:43:16.775Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-05-31T21:12:30.288Z',
      _id: '5b10653ec758bd002ef13a6d',
      teamName: 'NomemberTeam',
      createdDatetime: '2018-05-31T21:12:30.288Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-09-13T17:56:09.517Z',
      _id: '5f5d79e9d73c944b6ce31bbc',
      teamName: 'Test One AA',
      createdDatetime: '2020-09-13T17:56:09.517Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-09-08T21:41:58.937Z',
      _id: '5f55bf96a3bca7119c2c04db',
      teamName: 'Test team',
      createdDatetime: '2020-09-08T21:41:58.937Z',
      __v: 0,
    },
    {
      isActive: false,
      modifiedDatetime: '2020-09-12T11:40:34.558Z',
      _id: '5f57fab1840a93a99b358bd9',
      teamName: 'YEAAAA',
      createdDatetime: '2020-09-12T11:40:34.558Z',
      __v: 0,
    },
    {
      isActive: false,
      modifiedDatetime: '2020-09-15T12:16:06.847Z',
      _id: '5f60b042922efb2f78cfa5bd',
      teamName: 'abc new team',
      createdDatetime: '2020-09-15T12:16:06.847Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-05-31T22:14:47.126Z',
      _id: '5b1073d7c758bd002ef13a72',
      teamName: 'cccc',
      createdDatetime: '2018-05-31T22:14:47.126Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2018-05-31T22:15:48.531Z',
      _id: '5b107414c758bd002ef13a73',
      teamName: 'cccc rjfljfio9we8',
      createdDatetime: '2018-05-31T22:15:48.531Z',
      __v: 0,
    },
    {
      isActive: true,
      modifiedDatetime: '2020-08-20T17:16:17.444Z',
      _id: '5f3eafe1c1baee0ef4784c8d',
      teamName: 'dev 006 team',
      createdDatetime: '2020-08-20T17:16:17.444Z',
      __v: 0,
    },
  ],
};

export const allProjectsMock = {
  fetching: false,
  fetched: true,
  projects: [
    {
      isActive: true,
      _id: '5f6cdff77b73161ddb32a0e5',
      projectName: '123123123',
    },
    {
      isActive: true,
      _id: '5f2f7490dc35a608720d5ca6',
      projectName: 'AAA NEW PROJECT 123',
    },
    {
      isActive: true,
      _id: '5e606e4f37477100173680ac',
      projectName: 'AAA New 2',
    },
    {
      isActive: true,
      _id: '5f26010a382aaf0c5095c815',
      projectName: 'AAA New Project Here',
    },
    {
      isActive: true,
      _id: '5f2f7353dc35a608720d5ca4',
      projectName: 'AAA this is new project 1111',
    },
    {
      isActive: true,
      _id: '5a849055592ca46b43db2729',
      projectName: 'Cloud Assessment233 4',
    },
    {
      isActive: true,
      _id: '5a849085592ca46b43db272a',
      projectName: 'Duplicable City Center',
    },
    {
      isActive: false,
      _id: '5ac513e71a3f62002a37c06f',
      projectName: 'Earthbag Village',
    },
    {
      isActive: true,
      _id: '5ad92203590b19002acfcd26',
      projectName: 'Funding and Partnership Building',
    },
    {
      isActive: true,
      _id: '5e7697b0cf82f400174375ae',
      projectName: 'Good project',
    },
    {
      isActive: true,
      _id: '5adab741590b19002acfcd2c',
      projectName: 'HG Education',
    },
    {
      isActive: true,
      _id: '5aefd6941b0ca9002dfe2475',
      projectName: 'HG Food',
    },
    {
      isActive: true,
      _id: '5ad91ec3590b19002acfcd24',
      projectName: 'HG Housing',
    },
    {
      isActive: true,
      _id: '5b0db11ffe4a7a002d2b6c76',
      projectName: 'HG Society',
    },
    {
      isActive: true,
      _id: '5a6b821d019f9213b4186ccc',
      projectName: 'HGN Software Developement',
    },
    {
      isActive: true,
      _id: '5f6e1c0a7644e730f40939f7',
      projectName: "Jerry's Test Project",
    },
    {
      isActive: true,
      _id: '5f567c0a00d14b19398772a7',
      projectName: 'Labor Day Project',
    },
    {
      isActive: true,
      _id: '5ad9222b590b19002acfcd28',
      projectName: 'Marketing and Promotion',
    },
    {
      isActive: true,
      _id: '5ad4b7514d09fa002abca581',
      projectName: 'Murphy Bed Design',
    },
    {
      isActive: true,
      _id: '5f4efdf5c9de3428e5e4010e',
      projectName: 'My New Project zyx',
    },
    {
      isActive: true,
      _id: '5ec8170cb90b4614742b0a2a',
      projectName: 'New Test Project 121',
    },
    {
      isActive: true,
      _id: '5ab88971842abc002bd3664a',
      projectName: 'OC Emails and Social Media',
    },
    {
      isActive: true,
      _id: '5e3e628386d84b0017e839f2',
      projectName: 'Qwerty',
    },
    {
      isActive: true,
      _id: '5af0c56c97524c002de2fbae',
      projectName: 'Research - Permaculture',
    },
    {
      isActive: true,
      _id: '5e7641f4bc3e4200179a9a4e',
      projectName: 'Sid Project',
    },
    {
      isActive: true,
      _id: '5e51b36f9dc8a5001780ed25',
      projectName: 'SidProject',
    },
    {
      isActive: true,
      _id: '5ad9221a590b19002acfcd27',
      projectName: 'Team Calls',
    },
    {
      isActive: true,
      _id: '5b064169d68f7f002dbcf4e1',
      projectName: 'Team Tech Support',
    },
    {
      isActive: true,
      _id: '5f6cdb1e381df65f1e0f89d7',
      projectName: 'Test 12312312',
    },
    {
      isActive: true,
      _id: '5f6cdaede12e2efb9520ce05',
      projectName: 'Test Jun 2020',
    },
    {
      isActive: true,
      _id: '5f567bd900d14b19398772a6',
      projectName: 'Test Project abcd',
    },
    {
      isActive: true,
      _id: '5f6cd3a62ef6fc779550d311',
      projectName: 'TestJJJ',
    },
    {
      isActive: true,
      _id: '5f260099382aaf0c5095c814',
      projectName: 'This is a new project',
    },
    {
      isActive: true,
      _id: '5f2f7086dc35a608720d5ca3',
      projectName: 'This is my new project aaaa',
    },
    {
      isActive: true,
      _id: '5b033d9e1d1f19002d830c3b',
      projectName: 'Website Maintenance',
    },
    {
      isActive: true,
      _id: '5aee760c1b0ca9002dfe2462',
      projectName: 'Weekly Progress Updates',
    },
    {
      isActive: true,
      _id: '5f34727278b914671b3976a0',
      projectName: 'adfasf',
    },
    {
      isActive: true,
      _id: '5f6cde08add7fe7ff4e9c4a9',
      projectName: 'lkjkjl',
    },
    {
      isActive: true,
      _id: '5e60712c37477100173680b0',
      projectName: 'sdsd',
    },
  ],
  status: '200',
};

export const authMock = {
  isAdmin: true,
  user: {
    userid: '5edf141c78f1380017b829a6',
    role: 'Administrator',
    expiryTimestamp: '2020-08-22T22:51:06.544Z',
    iat: 1597272666,
  },
  permissions: {
    frontPermissions: [],
    backPermissions: []
  },
  firstName: 'Dev',
  profilePic:
    'data:image/png;base64,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',
};

export const timerMock = {
  seconds: 0,
};

export const userProfileMock = {
  hoursByCategory: {
    housing: 0,
    food: 0,
    education: 0,
    society: 0,
    energy: 0,
  },
  timeEntryEditHistory: [],
  isActive: true,
  totalTangibleHrs: 15,
  phoneNumber: ['1112223333'],
  weeklycommittedHours: 10,
  teams: [
    {
      _id: '5a849147592ca46b43db272c',
      teamName: 'Dev ops dev team',
    },
    {
      _id: '5a849147592ca46b43db272d',
      teamName: 'Dev ops ops team',
    },
  ],
  projects: [
    {
      _id: '5f2f7490dc35a608720d5ca6',
      projectName: 'AAA NEW PROJECT 123',
    },
    {
      _id: '5e606e4f37477100173680ac',
      projectName: 'AAA New 2',
    },
    {
      _id: '5f2f7353dc35a608720d5ca4',
      projectName: 'AAA this is new project 1111',
    },
    {
      _id: '5a849055592ca46b43db2729',
      projectName: 'Cloud Assessment233 4',
    },
    {
      _id: '5aefd6941b0ca9002dfe2475',
      projectName: 'HG Food',
    },
  ],
  _id: '5edf141c78f1380017b829a6',
  emailPubliclyAccessible: true,
  phoneNumberPubliclyAccessible: true,
  personalBestMaxHrs: 50,
  badgeCollection: [],
  infringements: [
    {
      _id: '5ee5caf08b333c03b836b9a8',
      date: '2020-06-14',
      description:
        'System auto-assigned infringement for two reasons: not meeting weekly volunteer time commitment as well as not submitting a weekly summary. For the hours portion, you logged 0 hours against committed effort of 10 hours in the week starting Sunday 2020-06-07 and ending Saturday 2020-06-13.',
    },
    {
      _id: '5eef0570fa910222687757cf',
      date: '2020-06-21',
      description:
        'System auto-assigned infringement for two reasons: not meeting weekly volunteer time commitment as well as not submitting a weekly summary. For the hours portion, you logged 0 hours against committed effort of 10 hours in the week starting Sunday 2020-06-14 and ending Saturday 2020-06-20.',
    },
    {
      _id: '5eef6b49d689503a6fd85e1a',
      date: '2020-06-21',
      description:
        'System auto-assigned infringement for not meeting weekly volunteer time commitment. You logged 0 hours against committed effort of 10 hours in the week starting Sunday 2020-06-14 and ending Saturday 2020-06-20',
    },
    {
      _id: '5f13ef74e998840964d5e22a',
      date: '2020-07-19',
      description:
        'System auto-assigned infringement for not meeting weekly volunteer time commitment. You logged 0 hours against committed effort of 10 hours in the week starting Sunday 2020-07-12 and ending Saturday 2020-07-18',
    },
    {
      _id: '5f144a62c447e6373cd9c8a0',
      date: '2020-07-19',
      description:
        'System auto-assigned infringement for two reasons: not meeting weekly volunteer time commitment as well as not submitting a weekly summary. For the hours portion, you logged 0 hours against committed effort of 10 hours in the week starting Sunday 2020-07-12 and ending Saturday 2020-07-18.',
    },
    {
      _id: '5f266471bd88267c2878dd81',
      date: '2020-08-02',
      description:
        'System auto-assigned infringement for not meeting weekly volunteer time commitment. You logged 4 hours against committed effort of 10 hours in the week starting Sunday 2020-07-26 and ending Saturday 2020-08-01',
    },
    {
      _id: '5f2664705caa0d1c58a70a0f',
      date: '2020-08-02',
      description:
        'System auto-assigned infringement for two reasons: not meeting weekly volunteer time commitment as well as not submitting a weekly summary. For the hours portion, you logged 4 hours against committed effort of 10 hours in the week starting Sunday 2020-07-26 and ending Saturday 2020-08-01.',
    },
  ],
  role: 'Administrator',
  permissions: {
    frontPermissions: [],
    backPermissions: []
  },
  firstName: 'Dev',
  lastName: 'Admin',
  email: 'devadmin@hgn.net',
  adminLinks: [
    {
      Name: 'self',
      Link: '5edf141c78f1380017b829a6',
    },
    {
      Name: 'voulunteer',
      Link: '5eecff1e80d46831c828ed86',
    },
  ],
  personalLinks: [
    {
      Name: 'facebook',
      Link: 'facebook.com',
    },
    {
      Name: 'personal website',
      Link: 'http://www.capdevile.dev',
    },
  ],
  profilePic:
    'data:image/png;base64,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',
  weeklySummaries: [
    {
      dueDate: '2020-08-09T06:59:59.999Z',
      _id: '5f2ebc21e74d050017847ba5',
      summary:
        '<p>This is a test summary entered for the week ending <strong>Sat. August 8th, 2020</strong>.</p>',
    },
    {
      dueDate: '2020-07-26T06:59:59.999Z',
      _id: '5f2ebc21e74d050017847ba6',
      summary: '',
    },
    {
      dueDate: '2020-06-28T06:59:59.999Z',
      _id: '5f2ebc21e74d050017847ba7',
      summary: '',
    },
  ],
  jobTitle: ['Software Engineer'],
  privacySettings: {
    email: true,
    phoneNumber: true,
    blueSquares: true,
  },
  mediaUrl: 'http://dropbox.com',
  weeklySummariesCount: 0,
  savedTangibleHrs:[
    0,0,0,0,0,0,0,0
  ],
};

export const timeEntryMock = {
  weeks: {
    0: [
      {
        _id: '5f2e1d4eb0186f202baf9d22',
        notes:
          '<p>asfa as f as fa sfa f as f aas f sgsd faasf asfaf dhch</p>\n<p><a href="https://docs.google.com/document/d/1AQVluo0JNhAsqul-Zv1aNMhjX2eGuHKMCoGcvCI7XU4/edit">https://docs.google.com/document/d/1AQVluo0JNhAsqul-Zv1aNMhjX2eGuHKMCoGcvCI7XU4/edit#</a></p>\n<p>&nbsp;</p>',
        isTangible: true,
        personId: '5edf141c78f1380017b829a6',
        projectId: '5a849055592ca46b43db2729',
        wbsId: null,
        taskId: null,
        projectName: 'Mock Project 4',
        dateOfWork: '2020-08-12',
        hours: '1',
        minutes: '43',
      },
    ],
    1: [
      {
        _id: '5f34bf2678b914671b3976a1',
        notes: '<p>Test Delete</p>',
        isTangible: true,
        personId: '5edf141c78f1380017b829a6',
        projectId: '5e606e4f37477100173680ac',
        wbsId: '5a849055592ca46b43db2731',
        taskId: '6477b9d6173fbc0818ac5062',
        projectName: 'Mock Project 2',
        dateOfWork: '2020-08-07',
        hours: '3',
        minutes: '0',
      },
      {
        _id: '5f2e1c7ab0186f202baf9d20',
        notes:
          '<p>d g g sg sd gs dg ag dg c jh&nbsp;</p>\n<p><a href="https://docs.google.com/document/d/1AQVluo0JNhAsqul-Zv1aNMhjX2eGuHKMCoGcvCI7XU4/edit">https://docs.google.com/document/d/1AQVluo0JNhAsqul-Zv1aNMhjX2eGuHKMCoGcvCI7XU4/edit#</a></p>\n<p>&nbsp;</p>',
        isTangible: true,
        personId: '5edf141c78f1380017b829a6',
        projectId: '5e606e4f37477100173680ac',
        wbsId: '5a849055592ca46b43db2732',
        taskId: '6477b9d6173fbc0818ac5062',
        projectName: 'Mock Project 2',
        dateOfWork: '2020-08-07',
        hours: '1',
        minutes: '0',
      },
    ],
    2: [
      {
        _id: '5f25f1a6770a035f68843925',
        notes:
          '<p>af afs af af af a a fh sc d gfsg sdg <a href="http://www.google.com">http://www.google.com</a></p>',
        isTangible: true,
        personId: '5edf141c78f1380017b829a6',
        projectId: '5a849055592ca46b43db2729',
        wbsId: null,
        taskId: null,
        projectName: 'Mock Project 4',
        dateOfWork: '2020-08-01',
        hours: '1',
        minutes: '0',
      },
      {
        _id: '5f25ee6d770a035f68843924',
        notes:
          '<p>sfa asf as fa scas cas c asc scac c <a href="http://www.google.com">http://www.google.com</a></p>',
        isTangible: true,
        personId: '5edf141c78f1380017b829a6',
        projectId: '5f2f7353dc35a608720d5ca4',
        wbsId: '5a849055592ca46b43db2732',
        taskId: '6477b9d6173fbc0818ac5063',
        projectName: 'Mock Project 3',
        dateOfWork: '2020-08-01',
        hours: '2',
        minutes: '0',
      },
      {
        _id: '5f25c9d3770a035f68843923',
        notes:
          '<p>sa swf asf asf asda fa asf asf as f&nbsp;<a href="http://www.google.com">http://www.google.com</a></p>',
        isTangible: true,
        personId: '5edf141c78f1380017b829a6',
        projectId: '5a849055592ca46b43db2729',
        wbsId: null,
        taskId: null,
        projectName: 'Mock Project 4',
        dateOfWork: '2020-08-01',
        hours: '1',
        minutes: '0',
      },
    ],
  },
  period: [],
};

export const userProjectMock = {
  projects: [
    {
      projectId: '5f2f7490dc35a608720d5ca6',
      projectName: 'Mock Project 1',
    },
    {
      projectId: '5e606e4f37477100173680ac',
      projectName: 'Mock Project 2',
    },
    {
      projectId: '5f2f7353dc35a608720d5ca4',
      projectName: 'Mock Project 3',
    },
    {
      projectId: '5a849055592ca46b43db2729',
      projectName: 'Mock Project 4',
    },
  ],
  wbs: [
    {
      _id: '5a849055592ca46b43db2730',
      wbsName: 'Mock WBS 1',
      projectId: "5f2f7490dc35a608720d5ca6",
    },
    {
      _id: '5a849055592ca46b43db2731',
      wbsName: 'Mock WBS 2',
      projectId: '5e606e4f37477100173680ac'
    },
    {
      _id: '5a849055592ca46b43db2732',
      wbsName: 'Mock WBS 3',
      projectId: '5f2f7353dc35a608720d5ca4'
    },
  ],
};

export const userTaskMock = [
  {
    _id: "6477b9d6173fbc0818ac5061",
    wbsId: "5a849055592ca46b43db2730",
    projectId: '5f2f7490dc35a608720d5ca6',
    taskName: "Mock Task 1",
  },
  {
    _id: "6477b9d6173fbc0818ac5062",
    wbsId: "5a849055592ca46b43db2731",
    projectId: '5e606e4f37477100173680ac',
    taskName: "Mock Task 2",
  },
  {
    _id: "6477b9d6173fbc0818ac5063",
    wbsId: "5a849055592ca46b43db2732",
    projectId: '5f2f7353dc35a608720d5ca4',
    taskName: "Mock Task 3",
  },
];

export const allUserProfilesMock = {
  fetching: false,
  fetched: true,
  userProfiles: [
    {
      isActive: true,
      weeklycommittedHours: 0,
      _id: '5c4cc2109487b0003924f1e3',
      role: 'Administrator',
      firstName: 'Test',
      lastName: 'Admin',
      email: 'onecommunityglobal@gmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 20,
      _id: '5e2cc6df7a91aaf820510a55',
      role: 'Volunteer',
      firstName: 'Sidd',
      lastName: 'Admin',
      email: 'devadmin@live.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 10,
      _id: '5ede6be453a0480017164a5b',
      role: 'Administrator',
      firstName: 'Nithesh',
      lastName: 'Admin',
      email: 'nithuan141@gmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 10,
      _id: '5edf141c78f1380017b829a6',
      role: 'Administrator',
      firstName: 'Dev',
      lastName: 'Admin',
      email: 'devadmin@hgn.net',
    },
    {
      isActive: true,
      weeklycommittedHours: 15,
      _id: '5f20d19160bd1734f069dadb',
      role: 'Administrator',
      firstName: 'Jerry',
      lastName: 'Administrator',
      email: 'jerryadmin@example.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 0,
      _id: '5be0952c633dae0016081b4b',
      role: 'Administrator',
      firstName: 'Tyler',
      lastName: 'Calvert',
      email: 'tyjcalvert@gmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 0,
      _id: '5bef421d908c1b0038d06dbd',
      role: 'Administrator',
      firstName: 'Adam',
      lastName: 'Capdeville',
      email: 'agcapdeville@gmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 2,
      _id: '5e2a76cb0441c30039a6909a',
      role: 'Volunteer',
      firstName: 'Test',
      lastName: 'Cat',
      email: 'testcat@yopmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 10,
      _id: '5ef771cf612d522c54f9b637',
      role: 'Volunteer',
      firstName: 'Testing',
      lastName: 'Delete',
      email: 'testing.delete@example.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 3,
      _id: '5eff58c34c9f52001786f031',
      role: 'Volunteer',
      firstName: 'Test',
      lastName: 'Delete',
      email: 'td@td.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b3013287275b6002e3b2de4',
      role: 'Volunteer',
      firstName: 'Dipti',
      lastName: 'Dhondarkar',
      email: 'DiptiDhondarkar@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b3013087275b6002e3b2de3',
      role: 'Volunteer',
      firstName: 'Dehua',
      lastName: 'Feng',
      email: 'dehuafeng@yopmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 15,
      _id: '5f421a54552a840017149d32',
      role: 'Volunteer',
      firstName: 'Cheryl',
      lastName: 'Feng',
      email: 'yiqifeng1717@gmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b3013847275b6002e3b2de7',
      role: 'Volunteer',
      firstName: 'Michael',
      lastName: 'Hagler',
      email: 'MichaelHagler@yopmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 20,
      _id: '5f31dcb9a1a909eadee0eecb',
      role: 'Volunteer',
      firstName: 'Jun',
      lastName: 'Hao',
      email: 'junhao6503.work@gmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 10,
      _id: '5e9fa3d9b5dc3c2e48c10989',
      role: 'Manager',
      firstName: 'Alvaro',
      lastName: 'Hernández',
      email: 'alaherma@mail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b3013f57275b6002e3b2dea',
      role: 'Volunteer',
      firstName: 'Mike',
      lastName: 'Hogan',
      email: 'MikeHogan@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5ae0badeb3f1241c28c9b4e3',
      role: 'Volunteer',
      firstName: 'Swathy',
      lastName: 'Jayaseelan',
      email: 'SwathyJayaseelan@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b30136d7275b6002e3b2de6',
      role: 'Volunteer',
      firstName: 'Michael',
      lastName: 'Kowalski',
      email: 'MichaelKowalski@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b3013c47275b6002e3b2de9',
      role: 'Volunteer',
      firstName: 'Yun',
      lastName: 'Lin',
      email: 'YunLin@yopmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 10,
      _id: '5ea5ba581446e1164098fa7b',
      role: 'Manager',
      firstName: 'New',
      lastName: 'Manager',
      email: 'new.manager@example.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 15,
      _id: '5f20d18660bd1734f069dada',
      role: 'Manager',
      firstName: 'Jerry',
      lastName: 'Manager',
      email: 'jerrymanager@example.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5b0585ffd68f7f002dbcf4de',
      role: 'Administrator',
      firstName: 'Sowmya',
      lastName: 'Manohar',
      email: 'sowmisarojini@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5be0964d633dae0016081b4c',
      role: 'Administrator',
      firstName: 'Jordan',
      lastName: 'Miller',
      email: 'jordan@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 20,
      _id: '5ae0afcab3f1241c28c9b4e2',
      role: 'Administrator',
      firstName: 'Shubhra',
      lastName: 'Mittal2',
      email: 'shubhra.goel@gmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 10,
      _id: '5eddbcd353a0480017164a57',
      role: 'Administrator',
      firstName: 'Admin',
      lastName: 'New',
      email: 'ss@ram.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 10,
      _id: '5eddc35953a0480017164a58',
      role: 'Administrator',
      firstName: 'AdminTest',
      lastName: 'New',
      email: 'ss@admin.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 16,
      _id: '5e1a685add8cea0ea3420141',
      role: 'Administrator',
      firstName: 'Henry',
      lastName: 'Nguyen',
      email: 'thankyouforyouremail3000@gmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5bad2979e168140090176793',
      role: 'Volunteer',
      firstName: 'Emilio',
      lastName: 'Nájera',
      email: 'emilionájera@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5bec67ee0df8050016d2e21c',
      role: 'Volunteer',
      firstName: 'Ram',
      lastName: 'Ram',
      email: 'ram@yopmail.com',
    },
    {
      isActive: false,
      weeklycommittedHours: 0,
      _id: '5bc4f3d1476a8e009034264c',
      role: 'Core Team',
      firstName: 'Sara',
      lastName: 'Sabol',
      email: 'sarasabol@yopmail.com',
    },
    {
      isActive: true,
      weeklycommittedHours: 30,
      _id: '5ab1713bba0e82002b182206',
      role: 'Administrator',
      firstName: 'Jae',
      lastName: 'Sabol',
      email: 'jae@onecommunityglobal.org',
    },
    {
      isActive: true,
      weeklycommittedHours: 20,
      _id: '5e28bdaab9ec7807f278aea3',
      role: 'Manager',
      firstName: 'Rafel',
      lastName: 'Sabol',
      email: 'jae123s33@mail.com',
    },
  ],
};

export const timeZoneAPIMock = {
  fetching: false,
  fetched: true,
  userAPIKey: '4ef937173ce546ad8ad6133c3d93321d',
};

export const themeMock = {
  darkMode: true,
}

export const rolesMock = {
  fetching: false,
  fetched: true,
  role: {
    roles: [
      {
        roleName: 'Administrator',
        permissions: [
          // Badges
          'seeBadges',
          'assignBadges',
          'createBadges',
          'deleteBadges',
          'updateBadges',
          // Popups
          'createPopup',
          'updatePopup',
          // Projects
          'deleteProject',
          'postProject',
          'putProject',
          'assignProjectToUsers',
          // Tasks
          'importTask',
          'postTask',
          'updateTask',
          'swapTask',
          'deleteTask',
          'updateNum',
          // Teams
          'postTeam',
          'deleteTeam',
          'putTeam',
          'assignTeamToUsers',
          'editTeamCode',
          // Time Entries
          'editTimeEntry',
          'deleteTimeEntry',
          // 'postTimeEntry',?
          // User Profile
          'postUserProfile',
          'putUserProfile',
          'putUserProfileImportantInfo',
          'manageAdminLinks',
          'updateSummaryRequirements',
          'changeUserStatus',
          'updatePassword',
          'deleteUserProfile',
          'infringementAuthorizer',
          // WBS
          'postWbs',
          'deleteWbs',
          // Inv
          'getAllInvInProjectWBS',
          'postInvInProjectWBS',
          'getAllInvInProject',
          'postInvInProject',
          'transferInvById',
          'delInvById',
          'unWasteInvById',
          'getInvIdInfo',
          'putInvById',
          'getInvTypeById',
          'putInvType',
          'getAllInvType',
          'postInvType',
          // General
          'getUserProfiles',
          'getProjectMembers',
          'getWeeklySummaries',
          // 'getReportsPage',?
          'getTimeZoneAPIKey',
          'checkLeadTeamOfXplus',
        ],
      },
      {
        roleName: 'Volunteer',
        permissions: ['getReporteesLimitRoles'],
      },
      {
        roleName: 'Core Team',
        permissions: [
          'getUserProfiles',
          'getProjectMembers',
          'getAllInvInProjectWBS',
          'postInvInProjectWBS',
          'getAllInvInProject',
          'postInvInProject',
          'transferInvById',
          'delInvById',
          'unWasteInvById',
          'getInvIdInfo',
          'putInvById',
          'getInvTypeById',
          'putInvType',
          'getAllInvType',
          'postInvType',
          'getWeeklySummaries',
          'getTimeZoneAPIKey',
          'checkLeadTeamOfXplus',
        ],
      },
      {
        roleName: 'Manager',
        permissions: [
          'getUserProfiles',
          'getProjectMembers',
          'putUserProfile',
          'infringementAuthorizer',
          'getReporteesLimitRoles',
          'suggestTask',
          'getAllInvInProjectWBS',
          'postInvInProjectWBS',
          'getAllInvInProject',
          'postInvInProject',
          'transferInvById',
          'delInvById',
          'unWasteInvById',
          'getInvIdInfo',
          'putInvById',
          'getInvTypeById',
          'putInvType',
          'getAllInvType',
          'postInvType',
          'getWeeklySummaries',
          'getTimeZoneAPIKey',
          'checkLeadTeamOfXplus',
        ],
      },
      {
        roleName: 'Mentor',
        permissions: [
          'suggestTask',
          'getUserProfiles',
          'getProjectMembers',
          'putUserProfile',
          'infringementAuthorizer',
          'getReporteesLimitRoles',
          'getAllInvInProjectWBS',
          'postInvInProjectWBS',
          'getAllInvInProject',
          'postInvInProject',
          'transferInvById',
          'delInvById',
          'unWasteInvById',
          'getInvIdInfo',
          'putInvById',
          'getInvTypeById',
          'putInvType',
          'getAllInvType',
          'postInvType',
          'getWeeklySummaries',
          'getTimeZoneAPIKey',
          'checkLeadTeamOfXplus',
        ],
      },
      {
        roleName: 'Owner',
        permissions: [
          'postRole',
          'deleteRole',
          'putRole',
          'addDeleteEditOwners',
          'putUserProfilePermissions',
          'changeUserStatus',
          'seeBadges',
          'assignBadges',
          'createBadges',
          'deleteBadges',
          'updateBadges',
          'createPopup',
          'updatePopup',
          'deleteProject',
          'postProject',
          'putProject',
          'assignProjectToUsers',
          'importTask',
          'postTask',
          'updateNum',
          'updateTask',
          'swapTask',
          'deleteTask',
          'postTeam',
          'deleteTeam',
          'putTeam',
          'assignTeamToUsers',
          'editTimeEntry',
          'deleteTimeEntry',
          'updatePassword',
          'getUserProfiles',
          'getProjectMembers',
          'postUserProfile',
          'putUserProfile',
          'putUserProfileImportantInfo',
          'updateSummaryRequirements',
          'deleteUserProfile',
          'infringementAuthorizer',
          'manageAdminLinks',
          'postWbs',
          'deleteWbs',
          'getAllInvInProjectWBS',
          'postInvInProjectWBS',
          'getAllInvInProject',
          'postInvInProject',
          'transferInvById',
          'delInvById',
          'unWasteInvById',
          'getInvIdInfo',
          'putInvById',
          'getInvTypeById',
          'putInvType',
          'getAllInvType',
          'postInvType',
          'getWeeklySummaries',
          'getTimeZoneAPIKey',
          'checkLeadTeamOfXplus',
          'editTeamCode',
        ],
      },
      {
        roleName: 'Fake Test Role',
        permissions: [],
      },
    ]
  }
}

describe('Stop Error', () => {
  it('should not error out due to no tests (mockStates.js)', () => { });
});

// takes a list of permissions and returns a list of all other permissions
const allPermissionsExcept = (permissions) => {
  return getAllPermissionKeys().filter(perm => !permissions.includes(perm))
}

// takes a list of relevant permissions and returns two auth objects, one with the permissions and the other with all permissions not listed
export const createAuthMocks = (permissions) => {
  var authTemplate = {
    // isAdmin: true,
    user: {
      userid: '5edf141c78f1380017b829a6',
      role: 'Fake Test Role',
      expiryTimestamp: '2020-08-22T22:51:06.544Z',
      iat: 1597272666,
    },
    permissions: {
      frontPermissions: []
    },
    firstName: 'Dev',
    profilePic:''
  };
  const onlyPermissions = {...authTemplate, permissions: {frontPermissions: permissions}};
  const allOtherPermissions = {...authTemplate, permissions: {frontPermissions: allPermissionsExcept(permissions)}};
  return [onlyPermissions, allOtherPermissions];
};