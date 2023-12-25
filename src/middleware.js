export async function onRequest({ locals, request }, next) {
  locals.title = "Middle Title";
  locals.username = "request name";

  locals.welcomeTitle = () => {
    return "Welcome back " + locals.username;
  };

  return next();
}
