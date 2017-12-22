from backend.main import app


def test_fixture_test_client_get():
    req, resp = app.test_client.get('/')
    assert resp.status == 200

def test_index_put_not_allowed():
    req, resp = app.test_client.put('/')
    assert resp.status == 405
