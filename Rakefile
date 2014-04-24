##
# tasks for maintaining and deploying this site
#
# adapted and simplified from:
#    http://davidwparker.com/2009/12/01/my-jekyll-rake-file/
#
# relies on public key being set up for the user on the host

USER_NAME = "jimnist"
HOST_NAME = "jimnist.com"
SITE_DIR = "jimnist.com/tom-tom-tom"

desc "build _site locally"
task :build => :delete do
  puts "building site"
  system('compass compile ./compass')
  system('jekyll build')
end

desc "deletes jekyll generated site"
task :delete do
  puts "deleting site"
  system('rm -fr _site/css/')
  system('rm -fr _site/js/')
  system('rm -fr _site/img/')
  system('rm -fr _site/*')
end

# first make sure we are using production javascript files,
# then change back after we deploy
desc "deploy site to dreamhost"
task :deploy => :build  do
  puts "deploying to dreamhost"
  system "rsync -avrz _site/ #{USER_NAME}@#{HOST_NAME}:#{SITE_DIR}"
end

desc "run jekyll and compass dev servers"
task :dev => :delete do
  system "./scripts/dev_servers.sh"
end

desc "production javascript"
task :production_js do
  puts 'setting production javascript'
end
