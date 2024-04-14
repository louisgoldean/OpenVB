from flask import Flask, render_template, request, send_from_directory

# This hasn't been synced with my offline computer and has problems that I'm too dumb to fix. This will be updated as soon as possible. Hopefully with fixes to my dumb problems
app = Flask('app')

@app.route('/openvb/<path:path>')
def staticOpenVB(path):
    return send_from_directory('public', path)

@app.route('/')
def openvb():
  print(request.headers)
  return render_template('openvb.html',
    Platfrom=request.headers['Sec-Ch-Ua-Platform']
  )

if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80)
