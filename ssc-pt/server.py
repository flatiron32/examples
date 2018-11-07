from twisted.web.server import Site
from twisted.web.static import File
from twisted.internet import reactor
from twisted.internet import endpoints

resource = File("./files")
factory = Site(resource)
endpoint = endpoints.TCP4ServerEndpoint(reactor, 8888)
endpoint.listen(factory)
reactor.run()