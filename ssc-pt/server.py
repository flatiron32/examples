from twisted.web.server import Site
from twisted.web.static import File
from twisted.internet import reactor
from twisted.internet import endpoints

resource = File("./static")
factory = Site(resource)
endpoint = endpoints.TCP4ServerEndpoint(reactor, 8000)
endpoint.listen(factory)
reactor.run()
