import { Server } from '@hapi/hapi';

export const init = async() => {
  try {
    const server = new Server({
      port: '3009',
    });

    // server.route({
    //   method: 'get',
    //   path: '/{any*}',
    //   handler() {
    //     return '404 Error! Page Not Found!';
    //   }
    // });

    return server;
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
};
