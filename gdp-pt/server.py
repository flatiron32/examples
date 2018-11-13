import time

from twisted.web.resource import Resource
from twisted.web.server import Site
from twisted.internet import reactor
from twisted.internet import endpoints


class ClockPage(Resource):
    isLeaf = True

    def render_GET(self, request):
        return (b"<!DOCTYPE html><html><head><meta charset='utf-8'>"
                b"<title></title></head><body>" + time.ctime().encode('utf-8'))



resource = ClockPage()
factory = Site(resource)
endpoint = endpoints.TCP4ServerEndpoint(reactor, 8000)
endpoint.listen(factory)
reactor.run()
